import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      showAlert("success", "Dark mode has been enabled successfully!!");
      document.title = "TextUtils - Dark Mode";
    } else {
      ModeState("danger");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled successfully!!");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <NavBar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter your text below to analyze"
                Mode={Mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About Mode={Mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
