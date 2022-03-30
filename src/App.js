import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from './components/Login';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={
            <Login/> 
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
