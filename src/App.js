import React from "react";
import './App.scss';
import './FontAwesomeIcon/FontAwesomeIcon'
import Header from './components/header/Header';
import Main from './components/main/main-content';
import Navbar from './components/navbar/navbar';
import { BrowserRouter } from "react-router-dom";

function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Main states={props.states}
          dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  );
}

export default App;

