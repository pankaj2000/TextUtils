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

  const ClearTextArea = () => {
    const newText = "";
    setText(newText);
  };

  const RemoveExtraSpace = () => {
    var array = text.split(/\s+/);
    // console.log(array.join(" "));
    setText(array.join(" "));
  };

  const CopyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard successfully!");
        props.showAlert("success","Text copied!!");
        setText(text);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{ color: props.Mode === "dark" ? "white" : "black" }}>
        <h1 className="my-3">{props.heading}</h1>
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
         
        >
          Enter your text below:
        </label>
        <textarea
          style={{
            backgroundColor: props.Mode === "dark" ? "grey" : "white",
            color: props.Mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          id="floatingTextarea"
          rows={8}
          onChange={handleOnChange}
          placeholder="Enter your text here.."
        ></textarea>
        <buttom className="btn btn-primary my-3" onClick={ConvertToUpper}>
          Convert To Upper Case
        </buttom>
        <buttom className="btn btn-primary my-3 mx-3" onClick={ConvertToLower}>
          Convert To Lower Case
        </buttom>
        <buttom className="btn btn-primary" onClick={CopyText}>
          CopyText
        </buttom>
        <buttom className="btn btn-primary mx-3" onClick={RemoveExtraSpace}>
          Remove Extra Space
        </buttom>
        <buttom className="btn btn-danger" onClick={ClearTextArea}>
          Clear TextArea
        </buttom>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h3>Text Summery</h3>
        <p>
          There are {text.length} character and{" "}
          {text.length > 0 ? text.split(" ").length : 0} words in above text
          area.
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in above textarea to preview here.."}</p>
      </div>
    </>
  );
}
