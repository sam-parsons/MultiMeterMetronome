import React from "react";

class NumBeats extends React.Component {
  renderNormal() {
    return (
      <select
        id="num-beats-input"
        defaultValue="4"
        onChange={() => {
          this.props.updateTimeSig();
          if (this.props.playing) {
            this.props.restartPlaying();
          }
        }}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    );
  }

  renderShort() {
    return (
      <select
        id="num-beats-input"
        defaultValue="4"
        onChange={() => {
          this.props.updateTimeSig();
          if (this.props.playing) {
            this.props.restartPlaying();
          }
        }}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
      </select>
    );
  }

  render() {
    const timeSig = this.props.timeSig;
    let selectElement;

    if (timeSig[1] === 2 || timeSig[1] === 4) {
      selectElement = this.renderNormal();
    } else {
      selectElement = this.renderShort();
    }

    return (
      <div className="num-beats-div">
        {selectElement}
        <div id="num-beats-desc"># of beats</div>
      </div>
    );
  }
}

export default NumBeats;
