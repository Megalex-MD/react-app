import React from "react";
import './App.scss';
import './FontAwesomeIcon/FontAwesomeIcon'
import Header from './components/header/Header';
import Main from './components/main/main-content';
import Navbar from './components/navbar/navbar';
import { BrowserRouter } from "react-router-dom";

// let dialogsData = [
//   { name: 'Cezar', id: 1 },
//   { name: 'Artur', id: 2, },
//   { name: 'Yulius', id: 3 },
//   { name: 'Marius', id: 4 },
//   { name: 'Elizaveta', id: 5 }
// ]
// let messageData = [
//   { message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio' },
//   { message: 'Lorem, ipsum.' },
//   { message: 'Hy' }
// ]

// let personData = {
//   name: 'Dima',
//   birthDate: '12.07.1993',
//   city: 'Moldova, Chisinau',
//   education: 'FrontEnd Developer'
// }

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Main mainStates={props.states.mainPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;

