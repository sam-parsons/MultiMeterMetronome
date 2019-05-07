import React from "react";

class NumBeats extends React.Component {
  render() {
    return (
      <div className="num-beats-div">
        <select
          id="num-beats-input"
          defaultValue="4"
          onChange={() => {
            this.props.updateTimeSig();
            // this.props.generateMetronome(); // taken care of in app.js
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
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="19">19</option>
        </select>
        <div id="num-beats-desc"># of beats</div>
      </div>
    );
  }
}

export default NumBeats;

/**
 * 					type="number"
 * 					min="2"
					max="20"
					defaultValue="4"
 */
