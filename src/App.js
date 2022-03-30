import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Categorias from './components/Categorías';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
          <Route path='/usuarios' exact element={<Usuarios/>}/>
          <Route path='/productos' exact element={<Productos/>}/>
          <Route path='/categorias' exact element={<Categorias/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
