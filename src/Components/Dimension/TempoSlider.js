import React from "react";

class TempoSlider extends React.Component {
  render() {
    return (
      <div id="tempo-div">
        <input
          id="tempo-sld"
          type="range"
          min="30"
          max="400"
          defaultValue="120"
          onChange={() => this.props.updateBPM()}
        />
        <div id="tempo-value">
          <div id="tempo-value-header">
            {/* <select
              name="tempo-subdivision"
              id="tempo-subdivision"
              onChange={() => this.props.updateTempoSubdivision()}
            >
              <option value="Q">Quarter notes per minute</option>
              <option value="E">Eighth notes per minute</option>
            </select> */}

            <div id="bpm-value">{this.props.bpm}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TempoSlider;
