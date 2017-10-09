import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form>
        <div className="form__paragraph">
          <select onChange={props.handleChange} name="numParagraphs" id="numPara">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="numPara">paragraphs</label>
        </div>
        <div className="form__sentences">
          <select onChange={props.handleChange} name="numSentences" id="numLines">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <label htmlFor="numPara">sentences per paragraph</label>
        </div>
      </form>
    </div>
  );
};

export default Form;