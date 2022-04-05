import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './states/states'

export const rerender = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();
