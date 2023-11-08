import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Redux
import { Provider } from "react-redux";
import { configureStore, } from '@reduxjs/toolkit'
import {reducers} from './Redux/redux-config';

const store = configureStore({
  reducer: reducers,
  // *note: called a reducer because it takes two arguments(state, action) and reduces it to a single output( the new state)
  devTools: true,
  // devTools default: true, allows integration to redux devtools browser extension
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
