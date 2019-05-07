import React from "react";
import TopRow from "./StepSequence/TopRow.js";
import BottomRow from "./StepSequence/BottomRow.js";
// import ProgressBar from "./StepSequence/ProgressBar.js";

class StepSequence extends React.Component {
  render() {
    return (
      <div id="step-sequence">
        <TopRow updateMetronome={this.props.updateMetronome} />
        <BottomRow updateMetronome={this.props.updateMetronome} />
        {/* <ProgressBar /> */}
      </div>
    );
  }
}

export default StepSequence;
