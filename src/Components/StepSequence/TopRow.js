import React from "react";

class TopRow extends React.Component {
  render() {
    return (
      <div
        className="top-row"
        onClick={e => {
          //   e.preventDefault(); // ** WHY DOES THIS WORK ??
          this.props.updateMetronome();
        }}
      />
    );
  }
}

export default TopRow;
