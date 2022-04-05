import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, newPostText } from './states/states';

export const rerender = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states} addPost={addPost} newPostText={newPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();
