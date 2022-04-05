import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import states from './states/states';
import { addPost } from './states/states'

ReactDOM.render(
  <React.StrictMode>
    <App states={states} addPost={addPost} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
