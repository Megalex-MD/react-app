import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './states/redux-store';


export const rerender = (states) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <App states={states} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerender(store.getState())
store.subscribe(() => rerender(store.getState()))

reportWebVitals();