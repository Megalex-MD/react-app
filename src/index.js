import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { name: 'Cezar', id: 1 },
  { name: 'Artur', id: 2, },
  { name: 'Yulius', id: 3 },
  { name: 'Marius', id: 4 },
  { name: 'Elizaveta', id: 5 }
]
let messageData = [
  { message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio' },
  { message: 'Lorem, ipsum.' },
  { message: 'Hy' }
]

let personData = {
  name: 'Dima',
  birthDate: '12.07.1993',
  city: 'Moldova, Chisinau',
  education: 'FrontEnd Developer'
}

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} personData={personData} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
