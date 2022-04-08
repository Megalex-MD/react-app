import './index.scss';
import states, { subscribe } from './states/states';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, newPostText, addMessage, newMessageText } from './states/states';

export const rerender = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states} addPost={addPost} newPostText={newPostText} addMessage={addMessage} newMessageText={newMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerender(states)
subscribe(rerender)

reportWebVitals();



