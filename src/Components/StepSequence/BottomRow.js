import React from "react";

class BottomRow extends React.Component {
  render() {
    return (
      <div id="bottom-shell-div" className="note-shell-divs">
        <select
          name="note2"
          id="note2"
          className="note-selects"
          defaultValue="C5"
          onChange={e => {
            this.props.updateNotes();
          }}
        >
          <option value="Ab4">Ab4</option>
          <option value="A4">A4</option>
          <option value="Bb4">Bb4</option>
          <option value="B4">B4</option>
          <option value="C5">C5</option>
          <option value="Db5">Db5</option>
          <option value="D5">D5</option>
          <option value="Eb5">Eb5</option>
          <option value="E5">E5</option>
          <option value="F5">F5</option>
          <option value="Gb5">Gb5</option>
          <option value="G5">G5</option>
          <option value="Ab5">Ab5</option>
          <option value="A5">A5</option>
          <option value="Bb5">Bb5</option>
          <option value="B5">B5</option>
        </select>

        <div
          className="bottom-row"
          onClick={e => {
            this.props.updateMetronome();
            e.preventDefault(); // ** WHY DOES THIS WORK ??
          }}
        />
      </div>
    );
  }
}

export default BottomRow;
