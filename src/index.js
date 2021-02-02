import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware } from 'redux';
//import reducer from './store/reducer';
import reducer from "./store"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import 'bootstrap/dist/css/bootstrap.min.css';

const logger = (store) => (next) => (action) => {
  console.log("Action fired", action);
  next(action);
}

// 1. Create a store
// const store = createStore(combinedReducer({
//   employee: employeereducer,
//     user: userreducer
// }), applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(logger, thunk));

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
