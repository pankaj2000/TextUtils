import React, { useState } from "react";

export default function TextForm(props) {
  const ConvertToUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <form>
      <div class="mb-3">
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
        ></textarea>
        <buttom className="btn btn-primary my-3" onClick={ConvertToUpper}>
          Convert To Upper Case
        </buttom>
      </div>
    </form>
  );
}
