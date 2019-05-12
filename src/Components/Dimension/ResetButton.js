import React from "react";

class ResetButton extends React.Component {
  render() {
    return (
      <div id="reset-div">
        <button
          className="reset-btn"
          id="reset-btn"
          onClick={() => {
            this.props.resetMetronome();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ResetButton;
