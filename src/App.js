import React, { Component } from "react";
import "./App.css";
import Dimension from "./Components/Dimension.js";
import StepSequence from "./Components/StepSequence.js";
import Tone from "tone";
import StartAudioContext from "startaudiocontext";

/*
To-Do
- ability to type in tempo
- bugs in updateMetronome
- step sequencer better responsive performance
- organize and document css files
*/

/*
 * Questions
 ** how/where to extract magic numbers in calcMetLength and calcBeatTicks ?? this.state.defaults: {timeSig:[4,4], ...}
 ** how does e.preventDefault() work on top and bottom row of step sequencer ??
 ** better way of writing resetMetronome() with multiple querySelectors on one element?
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
      playing: false,
      bpm: 120,
      notes: ["C5", "Eb5"],
      timeSig: [4, 4],
      renderedNotes: [],
      metronomeContainer: [], // holds Part for future stoppage and erasal
      defaults: {
        timeSig: [4, 4],
        bpm: 120,
        notes: ["C5", "Eb5"]
      }
      // loopStatus: false, // what is this used for?
    };
  }

  componentDidMount() {
    this.generateMetronome();
    this.generateStepSequence();

    // event listener for space bar
    window.addEventListener("keydown", e => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        try {
          e.preventDefault(); // prevents space bar from triggering selected checkboxes
          this.togglePlaying();
        } catch (e) {
          console.log(e);
        }
      }
    });

    // throttle window resize listener
    const newFunc = this.adjustLabelWidth;
    let isFiring = false;
    const throttleEvent = () => {
      if (!isFiring) {
        window.requestAnimationFrame(() => {
          newFunc();
          isFiring = false;
        });
      }
      isFiring = true;
    };
    window.addEventListener("resize", throttleEvent, false);
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

        // clear visualization
        this.clearVisualization();
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
  }

  restartPlaying() {
    if (this.state.playing) {
      this.setState({ playing: true, seqIsPlaying: false }, () => {
        //stop transport
        Tone.Transport.stop();

        // configure looping for step sequencer
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd =
          this.calcMetLength() / (this.state.bpm * (8 / 60)); // magic equation
        Tone.Transport.loop = true;

        // start transport after loop config
        Tone.Transport.start("+0.0");
        console.log("playing restarted");
      });
    } else {
      console.error("restartPlaying called while not playing");
    }
  }

  resetMetronome() {
    console.log("resetting metronome");
    this.setState(
      {
        bpm: this.state.defaults["bpm"],
        notes: this.state.defaults["notes"],
        timeSig: this.state.defaults["timeSig"]
      },
      () => {
        // querySelectors - eliminate magic numbers - maybe move somewhere else?
        document.querySelector("#num-beats-input").value = this.state.defaults[
          "timeSig"
        ][0];
        document.querySelector("#subdivision-input").value = Math.sqrt(
          this.state.defaults["timeSig"][1]
        ); // how to eliminate sqrt call?
        document.querySelector("#note1").value = this.state.defaults[
          "notes"
        ][1];
        document.querySelector("#note2").value = this.state.defaults[
          "notes"
        ][0];

        this.updateBPM(this.state.bpm);
        this.generateStepSequence();
        this.updateMetronome();
        if (this.state.playing) this.restartPlaying();
      }
    );
  }

  updateBPM(value) {
    // better way of writing this, maybe without two querySelectors??
    const slider = value ? value : document.querySelector("#tempo-sld").value;
    if (value) {
      document.querySelector("#tempo-sld").value = value;
    }
    // set slider label
    document.querySelector("#bpm-value").innerHTML = `${slider}`;
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
    // retrieve time signature values from select elements
    const top = document.querySelector("#num-beats-input");
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

  // updates frequencies of notes
  updateNotes() {
    console.log("updating notes");
    const topNote = document.querySelector("#note1").value;
    const bottomNote = document.querySelector("#note2").value;

    this.setState(
      {
        notes: [bottomNote, topNote]
      },
      () => {
        this.updateMetronome();
      }
    );
  }

  // updates quarter note or eighth note tempo
  updateTempoSubdivision() {
    console.log("updating tempo subdivision calculation");
    let tempBPM =
      document.querySelector("#tempo-subdivision").value === "E"
        ? this.state.bpm * 2
        : this.state.bpm / 2;

    document.querySelector("#bpm-value").innerHTML = tempBPM;
    document.querySelector("#tempo-sld").value = tempBPM;
  }

  generateMetronome() {
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
      synth.triggerAttackRelease(value.note, 0.05, time, value.velocity);
      console.log("sound");
    }, renderedNotes).start(0);
    metronomeContainer.push(part);

    this.setState({
      renderedNotes,
      metronomeContainer
    });
  }

  updateMetronome() {
    // erase or stop all previous parts
    const metronomeContainer = this.state.metronomeContainer;
    metronomeContainer.forEach(part => part.removeAll());

    // metronome vitals
    const timeSig = this.state.timeSig;
    const notes = this.state.notes;
    const metLength = this.calcMetLength(timeSig);
    const beatTicks = this.calcBeatTicks(timeSig[1]);

    // make copy of rendered notes and erase everything
    const renderedNotes = [];
    const matrix = this.readCheckboxes();
    console.log(`updated matrix: `);
    console.log([matrix[0], matrix[1]]);
    let labelCount = 0;
    for (let i = 0; i < metLength; i++) {
      if (timeSig[1] <= 4 && i % (beatTicks / 2) === 0) {
        if (
          matrix[0][i / (beatTicks / 2)] === 1 &&
          matrix[1][i / (beatTicks / 2)] === 1
        ) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount
          });
        } else if (matrix[0][i / (beatTicks / 2)] === 1) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
        } else if (matrix[1][i / (beatTicks / 2)] === 1) {
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
        } else {
          // render silent notes
          renderedNotes.push({
            note: "A5",
            time: `0:${i / 8}`,
            velocity: 0,
            labelNum: labelCount++
          });
        }
      } else if (i % beatTicks === 0) {
        if (matrix[0][i / beatTicks] === 1 && matrix[1][i / beatTicks] === 1) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount
          });
        } else if (matrix[0][i / beatTicks] === 1) {
          renderedNotes.push({
            note: notes[1],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
        } else if (matrix[1][i / beatTicks] === 1) {
          renderedNotes.push({
            note: notes[0],
            time: `0:${i / 8}`,
            velocity: 0.1,
            labelNum: labelCount++
          });
        } else {
          // render silent notes
          renderedNotes.push({
            note: "A5",
            time: `0:${i / 8}`,
            velocity: 0,
            labelNum: labelCount++
          });
        }
      }
    }

    const part = new Tone.Part((time, value) => {
      synth.triggerAttackRelease(value.note, 0.05, time, value.velocity);

      this.advanceVisualization(value.labelNum);
    }, renderedNotes).start(0);
    metronomeContainer.push(part);

    this.setState({
      renderedNotes,
      metronomeContainer
    });
  }

  advanceVisualization(index) {
    const labelList = document.querySelectorAll(".labels");
    const length = labelList.length / 2;
    if (index === 0) {
      labelList[index].style.background = "lavender";
      labelList[index + length].style.background = "lavender";
      labelList[length - 1].style.background = "none";
      labelList[length * 2 - 1].style.background = "none";
    } else {
      labelList[index].style.background = "lavender";
      labelList[index + length].style.background = "lavender";
      labelList[index - 1].style.background = "none";
      labelList[index + length - 1].style.background = "none";
    }
  }

  clearVisualization() {
    const labelList = document.querySelectorAll(".labels");
    labelList.forEach(label => (label.style.background = "none"));
  }

  generateStepSequence() {
    const timeSig = this.state.timeSig;
    const matrix = this.generateSeqMatrix();
    const topRow = document.querySelector(".top-row");
    const bottomRow = document.querySelector(".bottom-row");

    // - halves and quarters are twice as many checkboxes as the numerator to accomodate one rhythmic level below (halves and quarters / quarters and eighths)
    // updating top row checkboxes
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
        const label = document.createElement("label");
        label.key = "tk" + i;
        label.setAttribute("for", "tr" + i);
        label.className = "labels";
        label.setAttribute("highlighted", false);
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
        const label = document.createElement("label");
        label.key = "tk" + i;
        label.setAttribute("for", "tr" + i);
        label.className = "labels";
        label.setAttribute("highlighted", false);
        div.appendChild(element);
        div.appendChild(label);
        topRow.appendChild(div);
      }
    }

    // updating bottom row checkboxes
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
        const label = document.createElement("label");
        label.key = "bk" + i;
        label.setAttribute("for", "br" + i);
        label.className = "labels";
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
        const label = document.createElement("label");
        label.key = "bk" + i;
        label.setAttribute("for", "br" + i);
        label.className = "labels";
        div.appendChild(element);
        div.appendChild(label);
        bottomRow.appendChild(div);
      }
    }

    this.adjustLabelWidth();
  }

  // adjust step sequencer widths on DOM for large numerators
  adjustLabelWidth() {
    // resize checkboxes if appropriate
    // gather layout data from DOM
    const appWidth = document.querySelector(".App").offsetWidth;
    const selectWidth =
      document.querySelector("#note1").offsetWidth +
      0.075 * document.querySelector(".App").offsetWidth;
    const labelCount = document.querySelector(".top-row").childElementCount;
    const totalLabelsWidth =
      (document.querySelector(".labels").offsetWidth + 0.01 * appWidth) *
      labelCount;
    const totalElementsWidth =
      document.querySelector("#note1").offsetWidth +
      0.075 * appWidth +
      totalLabelsWidth;

    // if totalElementsWidth greater than appWidth, shrink checkboxes to fit
    const stepSeq = document.querySelector("#step-sequence");
    const labels = document.querySelectorAll(".labels");
    let projLabelWidth;
    if (appWidth - totalElementsWidth < 0) {
      projLabelWidth = Math.round(
        (appWidth - selectWidth) / labelCount - 0.01 * appWidth
      );
      console.log("projected label width: ", projLabelWidth);
      labels.forEach(label => {
        label.style.width = `${projLabelWidth}px`;
        label.style.height = `${projLabelWidth}px`;
      });
      stepSeq.style.margin = "-5% auto auto";
    } else {
      // default label formatting
      console.log("standard label width: 30px");
      console.log(
        "app width: " + appWidth + " - elements width: " + totalElementsWidth
      );
      labels.forEach(label => {
        label.style.width = `30px`;
        label.style.height = `30px`;
      });
      stepSeq.style.margin = `-5% auto auto ${Math.round(
        (appWidth - totalElementsWidth) / 20
      )}%`;
    }
  }

  // returns a 2d matrix based upon the current state of the step sequencer
  readCheckboxes(array) {
    // gather current checkboxes
    const topRowButtons = document.querySelectorAll(".top-row-btn");
    const bottomRowButtons = document.querySelectorAll(".bottom-row-btn");
    // create new arrays
    const topArray = [];
    const bottomArray = [];
    if (!array) {
      for (let i = 0; i < topRowButtons.length; i++) {
        topArray.push(topRowButtons[i].checked ? 1 : 0);
        bottomArray.push(bottomRowButtons[i].checked ? 1 : 0);
      }
      // console.log([topArray, bottomArray]);
      return [topArray, bottomArray];
    } else {
      for (let i = 0; i < topRowButtons.length; i++) {
        topArray.push(topRowButtons[i].checked ? 1 : 0);
        bottomArray.push(bottomRowButtons[i].checked ? 1 : 0);
      }
      // console.log([topArray, bottomArray]);
      return [topArray, bottomArray];
    }
  }

  // generates a generic matrix for new time signatures
  generateSeqMatrix() {
    const [numerator, denominator] = this.state.timeSig;
    const finalMatrix = [];
    // 8ths, 16ths, and 32nds matrices length determined by numerator
    // half and quarters matrices length twice as long to incorporate rhythmic level below
    if (denominator >= 8) {
      for (let i = 0; i < numerator; i++) {
        i % 2 === 0 ? finalMatrix.push(1) : finalMatrix.push(0);
      }
    } else {
      for (let i = 0; i < numerator * 2; i++) {
        i % 2 === 0 ? finalMatrix.push(1) : finalMatrix.push(0);
      }
    }
    return finalMatrix;
  }

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
        return 8 * tempMultiplier;
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
        return 8;
    }
  }

  render() {
    return (
      <div className="App">
        <span id="info-span">Sam Parsons ©2019</span>
        <div className="title">
          <h3>Multimeter Metronome</h3>
        </div>
        <Dimension
          timeSig={this.state.timeSig}
          updateTimeSig={this.updateTimeSig.bind(this)}
          updateMetronome={this.updateMetronome.bind(this)}
          playing={this.state.playing}
          togglePlaying={this.togglePlaying.bind(this)}
          restartPlaying={this.restartPlaying.bind(this)}
          bpm={this.state.bpm}
          updateBPM={this.updateBPM.bind(this)}
          resetMetronome={this.resetMetronome.bind(this)}
          updateTempoSubdivision={this.updateTempoSubdivision.bind(this)}
        />
        <StepSequence
          generateStepSequence={this.generateStepSequence.bind(this)}
          updateMetronome={this.updateMetronome.bind(this)}
          updateNotes={this.updateNotes.bind(this)}
        />
      </div>
    );
  }
}

export default App;
