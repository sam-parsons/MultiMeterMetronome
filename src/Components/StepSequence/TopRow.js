import React from "react";

class TopRow extends React.Component {
  render() {
    return (
      <div
        className="top-row"
        onClick={e => {
          console.log("top row triggered");
          e.preventDefault(); // ** WHY DOES THIS WORK ??
          this.props.updateMetronome();
        }}
      />
    );
  }
}

export default TopRow;
