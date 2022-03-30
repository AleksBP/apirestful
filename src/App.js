import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Categorias from './components/Categorias';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Router>
        {window.location.pathname != "/" &&
          <Navbar/>
        }

        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/usuarios' element={<Usuarios/>}/>
          <Route exact path='/productos' element={<Productos/>}/>
          <Route exact path='/categorias' element={<Categorias/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
