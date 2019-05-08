import React from "react";

class BottomRow extends React.Component {
  render() {
    return (
      <div
        className="bottom-row"
        onClick={e => {
          this.props.updateMetronome();
          //   e.preventDefault(); // ** WHY DOES THIS WORK ??
        }}
      />
    );
  }
}

export default BottomRow;
