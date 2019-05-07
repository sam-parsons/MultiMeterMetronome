import React from "react";
import TopRow from "./StepSequence/TopRow.js";
import BottomRow from "./StepSequence/BottomRow.js";
// import ProgressBar from "./StepSequence/ProgressBar.js";

class StepSequence extends React.Component {
  render() {
    return (
      <div id="step-sequence">
        <TopRow
          generateStepSequence={this.props.generateStepSequence}
          updateTopRow={this.props.updateTopRow}
          updateMetronome={this.props.updateMetronome}
        />
        <BottomRow
          generateStepSequence={this.props.generateStepSequence}
          updateBottomRow={this.props.updateBottomRow}
          updateMetronome={this.props.updateMetronome}
        />
        {/* <ProgressBar /> */}
      </div>
    );
  }
}

export default StepSequence;
