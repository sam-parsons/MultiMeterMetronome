import React from "react";
import NumBeats from "./Dimension/NumBeats.js";
import Subdivision from "./Dimension/Subdivision.js";
import PlayStopButton from "./Dimension/PlayStopButton.js";
import TempoSlider from "./Dimension/TempoSlider.js";
import ResetButton from "./Dimension/ResetButton.js";

class Dimension extends React.Component {
  render() {
    return (
      <div className="dimension">
        <div className="time-signature">
          <NumBeats
            playing={this.props.playing}
            timeSig={this.props.timeSig}
            updateTimeSig={this.props.updateTimeSig}
            updateMetronome={this.props.updateMetronome}
            restartPlaying={this.props.restartPlaying}
          />
          <Subdivision
            playing={this.props.playing}
            timeSig={this.props.timeSig}
            updateTimeSig={this.props.updateTimeSig}
            restartPlaying={this.props.restartPlaying}
            updateMetronome={this.props.updateMetronome}
          />
          <ResetButton
            updateTimeSig={this.props.updateTimeSig}
            updateMetronome={this.props.updateMetronome}
            resetMetronome={this.props.resetMetronome}
          />
        </div>
        <div className="play-export">
          <PlayStopButton
            togglePlaying={this.props.togglePlaying}
            playing={this.props.playing}
            updateMetronome={this.props.updateMetronome}
          />
        </div>
        <TempoSlider
          updateBPM={this.props.updateBPM}
          bpm={this.props.bpm}
          updateTempoSubdivision={this.props.updateTempoSubdivision}
        />
      </div>
    );
  }
}

export default Dimension;
