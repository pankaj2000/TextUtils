import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [Mode, ModeState] = useState("danger");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "danger") {
      ModeState("dark");
      document.body.style.backgroundColor = "#0c184c";
       showAlert("success","Dark mode has been enabled successfully!!");
      //  document.title = "TextUtils - Dark Mode";
       setInterval(() => {
        document.title = "TextUtils - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils - Keep using it.";
      }, 1500);
    } else {
      ModeState("danger");
      document.body.style.backgroundColor = "white";
       showAlert("success","Light mode has been enabled successfully!!");
       document.title = "TextUtils - Light Mode";
    }
  }

    return (
      <React.Fragment>
        <NavBar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <TextForm heading="Enter you text below to analyse" Mode={Mode} showAlert = {showAlert}/>
          {/* <About/> */}
        </div>
      </React.Fragment>
    );
  };


export default App;
