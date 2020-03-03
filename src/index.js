import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store = {store}>
    <Home />
  </Provider>, 
  document.getElementById('root'));
