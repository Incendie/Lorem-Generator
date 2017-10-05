import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form>
        <div className="form__paragraph">
          <label htmlFor="numPara">How many paragraphs do you need?</label>
          <select onChange={props.handleChange} name="numParagraphs" id="numPara">
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div className="form__sentences">
          <label htmlFor="numPara">How many sentences per paragraph?</label>
          <select onChange={props.handleChange} name="numSentences" id="numLines">
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
            <option value="9">Nine</option>
            <option value="10">Ten</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;