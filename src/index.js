import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './states/states';


export const rerender = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states} addPost={store.addPost.bind(store)} newPostText={store.newPostText.bind(store)}
        addMessage={store.addMessage.bind(store)} newMessageText={store.newMessageText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerender(store.getState())
store.subscribe(rerender)

reportWebVitals();



