import React from "react";

class BottomRow extends React.Component {
  render() {
    return (
      <div
        className="bottom-row"
        onClick={e => {
          e.preventDefault(); // ** WHY DOES THIS WORK ??
          this.props.updateMetronome();
        }}
      />
    );
  }
}

export default BottomRow;
