import React, { Component } from "react";
import "./App.css";
import Transport from "./Components/Transport.js";
import Dimension from "./Components/Dimension.js";
// import Sequence from "./Components/Sequence.js";
import StepSequence from "./Components/StepSequence.js";
// import MeasureContainer from "./Components/MeasureContainer.js";
import Tone from "tone";
import StartAudioContext from "startaudiocontext";

/*
To-Do
- make updateTimeSig a dynamic operation - performed while playing
*/

const synth = new Tone.PolySynth(2, Tone.Synth).toMaster();

// this may be unnecessary
StartAudioContext(Tone.context).then(function() {
  console.log("start audio context triggered");
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSig: [4, 4],
      renderedNotes: [],
      metronomeContainer: [], // holds Part for future stoppage and erasal
      sequenceContainer: [],
      seqContainerSize: 0,
      sequenceIndex: 0,
      seqIsPlaying: false,
      seqPartContainer: [],
      loopStatus: false,
      notes: ["C5", "EB5"],
      tempDivisor: 4,
      placement: 0,
      playing: false,
      bpm: 120,
      visualizeIndex: 0,
      eventCache: []
    };
  }

  componentDidMount() {
    this.generateMetronome();
    this.generateStepSequence();
  }

  togglePlaying() {
    if (this.state.playing) {
      this.setState({ playing: false, seqIsPlaying: false }, () => {
        //stop transport
        Tone.Transport.stop();
        console.log("playing stopped");

        // turn off looping - prevents collision with measure sequence loop
        Tone.Transport.loop = false;
        Tone.Transport.loopEnd = 0;
      });
    } else {
      this.setState({ playing: true, seqIsPlaying: false }, () => {
        // configure looping for step sequencer
        Tone.Transport.loopStart = 0;
        console.log(`calculated metronome length: ${this.calcMetLength()}`);
        Tone.Transport.loopEnd =
          this.calcMetLength() / (this.state.bpm * (8 / 60)); // magic equation
        Tone.Transport.loop = true;

        // start transport after loop config
        Tone.Transport.start("+0.0");
        console.log("playing initiated");
      });
    }

    // ** how to make this work after above async setStates ??
    // console.log(
    //   Tone.Transport.state == "started"
    //     ? "playing initiated"
    //     : "playing stopped"
    // );
  }

  updateBPM() {
    const slider = document.querySelector("#tempo-sld").value;
    document.querySelector(
      "#tempo-value-header"
    ).innerHTML = `Quarter notes per minute: ${slider}`;
    // console.log('updating bpm to ' + slider);
    this.setState(
      {
        bpm: parseInt(slider)
      },
      () => {
        Tone.Transport.bpm.value = parseInt(slider);
      }
    );
  }

  updateTimeSig() {
    const top = document.querySelector("#num-beats-input");
    // redo this with new select tag
    const bottom = document.querySelector("#subdivision-input");
    this.setState(
      {
        timeSig: [parseInt(top.value), Math.pow(2, parseInt(bottom.value))]
      },
      () => {
        console.log(
          `time signature updated: ${this.state.timeSig[0]} / ${
            this.state.timeSig[1]
          }`
        );
        this.generateStepSequence();
        this.updateMetronome();
      }
    );
  }

  generateMetronome() {
    console.log("generate metronome");
    // erase or stop all previous parts
    const metronomeContainer = this.state.metronomeContainer;
    metronomeContainer.forEach(part => part.removeAll());

    // metronome vitals
    const [note1, note2] = this.state.notes;
    const metLength = this.calcMetLength();
    const beatTicks = this.calcBeatTicks();

    // new renderedNotes array, populate
    const renderedNotes = [];
    for (let i = 0; i < metLength; i++) {
      if (i === 0) {
        renderedNotes.push({
          note: note2,
          time: `0:0`,
          velocity: 0.05
        });
      } else if (i % beatTicks === 0) {
        renderedNotes.push({
          note: note1,
          time: `0:${i / beatTicks}`,
          velocity: 0.05
        });
      }
    }

    // create new Part, start Part, push Part to container
    const part = new Tone.Part((time, value) => {
      synth.triggerAttackRelease(value.note, "32n", time, value.velocity);
    }, renderedNotes).start(0);
    metronomeContainer.push(part);

    // set state
    this.setState({
      renderedNotes,
      metronomeContainer
    });
  }

  updateMetronome() {
    console.log("updating metronome");
    // erase or stop all previous parts
    const metronomeContainer = this.state.metronomeContainer;
    metronomeContainer.forEach(part => part.removeAll());

    // clear sequences as well
    // const sequenceContainer = this.state.sequenceContainer;
    // const seqPartContainer = this.state.seqPartContainer;
    // seqPartContainer.forEach(part => part.removeAll());

    // metronome vitals
    const timeSig = this.state.timeSig;
    const notes = this.state.notes;
    const metLength = this.calcMetLength(timeSig);
    const beatTicks = this.calcBeatTicks(timeSig[1]);

    // make copy of rendered notes and erase everything
    const renderedNotes = [];
    const matrix = this.readCheckboxes();
    console.log("updated matrix" + matrix);
    for (let i = 0; i < metLength; i++) {
      if (timeSig[1] <= 4 && i % (beatTicks / 2) === 0) {
        if (matrix[0][i / (beatTicks / 2)] === 1) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1
          });
        }
        if (matrix[1][i / (beatTicks / 2)] === 1) {
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1
          });
        }
      } else if (i % beatTicks === 0) {
        if (matrix[0][i / beatTicks] === 1) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1
          });
        }
        if (matrix[1][i / beatTicks] === 1) {
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1
          });
        }
      }
    }
    const part = new Tone.Part((time, value) => {
      synth.triggerAttackRelease(value.note, "32n", time, value.velocity);
    }, renderedNotes).start(0);
    metronomeContainer.push(part);

    // set state
    this.setState({
      renderedNotes,
      metronomeContainer
      // sequenceIndex: 0,
      // seqPartContainer: seqPartContainer,
      // sequenceContainer: sequenceContainer,
      // seqContainerSize: 0
    });
  }

  generateStepSequence() {
    console.log("updating top row");
    const topRow = document.querySelector(".top-row");
    // console.log(topRow);
    const timeSig = this.state.timeSig;
    // console.log(timeSig);
    const matrix = this.generateSeqMatrix();
    console.log(matrix);
    if (timeSig[1] >= 8) {
      topRow.innerHTML = "";
      for (let i = 0; i < timeSig[0]; i++) {
        const div = document.createElement("div");
        div.key = "td" + i;
        div.className = "top-row-shell";
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "a" + i;
        element.id = "tr" + i;
        element.className = "top-row-btn";
        element.checked = i === 0 ? true : false;
        element.setAttribute("highlighted", false);
        element.onclick = () => {
          this.updateTopRow();
          this.updateMetronome();
        };
        const label = document.createElement("label");
        label.key = "tk" + i;
        label.setAttribute("for", "tr" + i);
        const highlight = document.createElement("div");
        highlight.key = "th" + i;
        highlight.className = "highlight";
        highlight.hidden = false;
        label.appendChild(highlight);
        div.appendChild(element);
        div.appendChild(label);
        topRow.appendChild(div);
      }
    } else if (timeSig[1] <= 4) {
      topRow.innerHTML = "";
      for (let i = 0; i < timeSig[0] * 2; i++) {
        const div = document.createElement("div");
        div.key = "td" + i;
        div.className = "top-row-shell";
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "b" + i;
        element.id = "tr" + i;
        element.className = "top-row-btn";
        element.checked = matrix[0] === 1 && i === 0 ? true : false;
        element.setAttribute("highlighted", false);
        element.onclick = () => {
          this.updateTopRow();
          this.updateMetronome();
        };
        const label = document.createElement("label");
        label.key = "tk" + i;
        label.setAttribute("for", "tr" + i);
        const highlight = document.createElement("div");
        highlight.key = "th" + i;
        highlight.className = "highlight";
        highlight.hidden = false;
        label.appendChild(highlight);
        div.appendChild(element);
        div.appendChild(label);
        topRow.appendChild(div);
      }
    }

    console.log("updating bottom row");
    const bottomRow = document.querySelector(".bottom-row");
    // console.log(bottomRow);

    console.log(matrix);
    if (timeSig[1] >= 8) {
      bottomRow.innerHTML = "";
      for (let i = 0; i < timeSig[0]; i++) {
        const div = document.createElement("div");
        div.key = "td" + i;
        div.className = "bottom-row-shell";
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "a" + i;
        element.id = "br" + i;
        element.className = "bottom-row-btn";
        element.checked = matrix[i] === 1 && i !== 0 ? true : false;
        element.onclick = () => this.updateBottomRow();
        const label = document.createElement("label");
        label.key = "bk" + i;
        label.setAttribute("for", "br" + i);
        const highlight = document.createElement("div");
        highlight.key = "th" + i;
        highlight.className = "highlight";
        highlight.hidden = false;
        label.appendChild(highlight);
        div.appendChild(element);
        div.appendChild(label);
        bottomRow.appendChild(div);
      }
    } else if (timeSig[1] <= 4) {
      bottomRow.innerHTML = "";
      for (let i = 0; i < timeSig[0] * 2; i++) {
        const div = document.createElement("div");
        div.key = "td" + i;
        div.className = "bottom-row-shell";
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "b" + i;
        element.id = "br" + i;
        element.className = "bottom-row-btn";
        element.checked = matrix[i] === 1 && i !== 0 ? true : false;
        element.onclick = () => this.updateBottomRow();
        const label = document.createElement("label");
        label.key = "bk" + i;
        label.setAttribute("for", "br" + i);
        const highlight = document.createElement("div");
        highlight.key = "th" + i;
        highlight.className = "highlight";
        highlight.hidden = false;
        label.appendChild(highlight);
        div.appendChild(element);
        div.appendChild(label);
        bottomRow.appendChild(div);
      }
    }

    console.log("updating progress bar");
    const progressBar = document.querySelector(".progress-bar");
    // console.log(progressBar);

    if (timeSig[1] >= 8) {
      progressBar.innerHTML = "";
      for (let i = 0; i < timeSig[0]; i++) {
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "a" + i;
        element.id = "id" + i;
        element.onclick = () => console.log("checkbox button clicked");
        progressBar.appendChild(element);
      }
    } else if (timeSig[1] <= 4) {
      progressBar.innerHTML = "";
      for (let i = 0; i < timeSig[0] * 2; i++) {
        const element = document.createElement("input");
        element.type = "checkbox";
        element.key = "b" + i;
        element.id = "id" + i;
        element.onclick = () => console.log("checkbox button clicked");
        progressBar.appendChild(element);
      }
    }
  }

  readCheckboxes(array) {
    console.log("reading checkboxes");
    if (!array) {
      const topRowButtons = document.querySelectorAll(".top-row-btn");
      const bottomRowButtons = document.querySelectorAll(".bottom-row-btn");
      // console.log(topRowButtons);
      // console.log(bottomRowButtons);
      // const matrix = this.generateSeqMatrix();
      const topArray = [];
      const bottomArray = [];
      for (let i = 0; i < topRowButtons.length; i++) {
        if (topRowButtons[i].checked && bottomRowButtons[i].checked) {
          topArray.push(1);
          bottomArray.push(1);
        } else if (!topRowButtons[i].checked && bottomRowButtons[i].checked) {
          topArray.push(0);
          bottomArray.push(1);
        } else if (topRowButtons[i].checked && !bottomRowButtons[i].checked) {
          topArray.push(1);
          bottomArray.push(0);
        } else if (!topRowButtons[i].checked && !bottomRowButtons[i].checked) {
          topArray.push(0);
          bottomArray.push(0);
        }
      }
      return [topArray, bottomArray];
    } else {
      const topRowButtons = document.querySelectorAll(".top-row-btn");
      const bottomRowButtons = document.querySelectorAll(".bottom-row-btn");
      console.log(topRowButtons);
      console.log(bottomRowButtons);
      const topArray = [];
      const bottomArray = [];
      for (let i = 0; i < topRowButtons.length; i++) {
        if (topRowButtons[i].checked && bottomRowButtons[i].checked) {
          topArray.push(1);
          bottomArray.push(1);
        } else if (!topRowButtons[i].checked && bottomRowButtons[i].checked) {
          topArray.push(0);
          bottomArray.push(1);
        } else if (topRowButtons[i].checked && !bottomRowButtons[i].checked) {
          topArray.push(1);
          bottomArray.push(0);
        } else if (!topRowButtons[i].checked && !bottomRowButtons[i].checked) {
          topArray.push(0);
          bottomArray.push(0);
        }
      }
      const finalMatrix = [topArray, bottomArray];
      return finalMatrix;
    }
  }

  generateSeqMatrix() {
    const timeSig = this.state.timeSig;
    const finalMatrix = [];
    console.log("timeSig: " + timeSig[0] + " " + timeSig[1]);

    if (timeSig[1] === 16 || timeSig[1] === 8 || timeSig[1] === 32) {
      for (let i = 0; i < timeSig[0]; i++) {
        i % 2 === 0 ? finalMatrix.push(1) : finalMatrix.push(0);
      }
    } else if (timeSig[1] === 4 || timeSig[1] === 2) {
      for (let i = 0; i < timeSig[0] * 2; i++) {
        if (i % 2 === 0) {
          finalMatrix.push(1);
        } else {
          finalMatrix.push(0);
        }
      }
    }
    console.dir(finalMatrix.length);
    return finalMatrix;
  }

  // ** how/where to extract magic numbers in calcMetLength and calcBeatTicks ??

  // calculates phrase length of given time signature at 32nd resolution
  calcMetLength() {
    const [tempMultiplier, tempDivisor] = this.state.timeSig;
    switch (tempDivisor) {
      case 2:
        return 16 * tempMultiplier;
      case 4:
        return 8 * tempMultiplier;
      case 8:
        return 4 * tempMultiplier;
      case 16:
        return 2 * tempMultiplier;
      case 32:
        return tempMultiplier;
      default:
        return 8 * tempMultiplier; // find a better default statement
    }
  }

  // returns resolution of note placement for generateMetronome()
  calcBeatTicks() {
    switch (this.state.timeSig[1]) {
      case 2:
        return 16;
      case 4:
        return 8;
      case 8:
        return 4;
      case 16:
        return 2;
      case 32:
        return 1;
      default:
        return 8; // find a better default statement
    }
  }

  render() {
    return (
      <div className="App">
        <span id="info-span">Sam Parsons ©2018</span>
        <div className="title">
          <h3>Multimeter Metronome</h3>
        </div>
        <Transport />
        <Dimension
          timeSig={this.state.timeSig}
          updateTimeSig={this.updateTimeSig.bind(this)}
          // exportMeasure={this.exportMeasure.bind(this)}
          updateMetronome={this.updateMetronome.bind(this)}
          togglePlaying={this.togglePlaying.bind(this)}
          playing={this.state.playing}
          bpm={this.state.bpm}
          updateBPM={this.updateBPM.bind(this)}
        />
        <StepSequence
        // updateTopRow={this.updateTopRow.bind(this)}
        // generateStepSequence={this.generateStepSequence.bind(this)}
        />
        {/* <div className="sequence-section">
          <h3>Measure Sequencer</h3>
        </div>
        <Sequence
        // generateSequence={this.generateSequence.bind(this)}
        // seqIsPlaying={this.state.seqIsPlaying}
        // loopStatus={this.state.loopStatus}
        // clearSequence={this.clearSequence.bind(this)}
        // sequenceContainer={this.state.sequenceContainer}
        // playSequence={this.playSequence.bind(this)}
        // updateSeqLoop={this.updateSeqLoop.bind(this)}
        />
        <MeasureContainer /> */}
      </div>
    );
  }
}

export default App;
