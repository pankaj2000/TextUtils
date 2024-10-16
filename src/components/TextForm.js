import React, { useState } from "react";

export default function TextForm(props) {
  const ConvertToUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const ConvertToLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter your text below:
        </label>
        <textarea
          className="form-control"
          value={text}
          id="floatingTextarea"
          rows={8}
          onChange={handleOnChange}
          placeholder="Enter your text here.."
        ></textarea>
        <buttom className="btn btn-secondary my-3" onClick={ConvertToUpper}>
          Convert To Upper Case
        </buttom>
        <buttom className="btn btn-secondary my-3 mx-3" onClick={ConvertToLower}>
          Convert To Lower Case
        </buttom>
      </div>
      <div className="container my-3">
        <h3>Text Summery</h3>
        <p>
          There are {text.length} character and {text.length>0?text.split(" ").length:0} words in above text area.
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
