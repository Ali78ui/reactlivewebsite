import { useState } from 'react';
import './App.css';
import Navbar1 from './components/Navbar1';
import Textfrom from './components/Textfrom';
import Alert from './components/Alert';
// import About from './components/About';
// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#7d77a8';
      showAlert("Dark mode has been enable", "success : ");
      document.title = "TextUtils - Dark Mode";

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success : ");
      document.title = "TextUtils - light Mode";
    }
  }
  return (

    <>
      {/* <Router> */}
        <Navbar1 title="TextUtils" about="about" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        {/* <Link></Link> */}
        <Alert alert={alert} /> 
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
              <Textfrom showAlert={showAlert} heading="Enter the text to analyze blow" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
          {/* <Textfrom showAlert={showAlert} heading="Enter the text to analyze blow" mode={mode} /> */}
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
