import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './index.scss';

import Dashboard from './containers/Dashboard/Dashboard';

import reportWebVitals from './reportWebVitals';
import CountryDetails from "./components/CountryDetails/CountryDetails";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/:name" element={<CountryDetails />} />
          </Routes>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
