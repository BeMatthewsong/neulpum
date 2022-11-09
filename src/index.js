import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import Header from './containers/header/Header';
import Company from './containers/company/Company';
import Techpage from './containers/techPage/Techpage';
// import Career from './containers/career/Career';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="company" element={<Company />} />
        <Route path="techpage" element={<Techpage />} />
        {/* <Route path="career" element={<Career />} /> */}
        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
