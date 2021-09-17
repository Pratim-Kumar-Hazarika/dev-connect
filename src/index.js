import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ChakraProvider>
      <App />
      </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


