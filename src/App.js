import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#444444";
      showAlert("dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "danger");
    }
  }
  const [btnColor, setBtnColor] = useState("primary");
  const changeColor = (put) => {
    if (mode === "dark") {
      if (put === '#77790b') setBtnColor('warning');
      else if (put === '#6b061d') setBtnColor('danger');
      else if (put === '#08510f') setBtnColor('success');
      else if (put === '#070958') setBtnColor('primary');
      document.body.style.backgroundColor = put;
    }
    else if (mode === 'light') {
      setBtnColor('primary');
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="BlueStack" aboutText="About BlueStack" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element= <About/>>
          </Route>
          <Route exact path="/TextForm" element=<TextForm showAlert={showAlert} heading="enter the text to analyse" mode={mode} btnColor={btnColor} />>
          </Route>
        </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
