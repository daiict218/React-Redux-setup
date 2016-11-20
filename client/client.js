import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../store/store';
import { Provider } from 'react-redux';   //help our app to connect with store

//configure and create our store here
//var store = createStore(reducers, initialState) something like this

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'initial Todo'
  }]
};

let store = configureStore(initialState);

render(
  //define the encompassing component,
  //DOM element
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
