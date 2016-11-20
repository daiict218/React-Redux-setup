import { createStore } from 'redux';
import reducer from '../reducers/reducers';

//We separated out the store from the client.js file so that if we have to add middleware here and change our state, we can do that here
//Add middlewares here

export default function configureStore(initialState = {todos: []}) {
  return createStore(reducer, initialState);
}