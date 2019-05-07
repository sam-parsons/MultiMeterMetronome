import React from "react";

class BottomRow extends React.Component {
  render() {
    return (
      <div
        className="bottom-row"
        onClick={() => {
          this.props.updateBottomRow();
          this.props.updateMetronome();
        }}
      />
    );
  }
}

export default BottomRow;
