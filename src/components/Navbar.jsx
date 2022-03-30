import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/css/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="navbar">
                    <div id="profile">
                        <img id="avatar" src={localStorage.getItem('img')}/>
                        <br />
                        <span>{localStorage.getItem('nombre')}</span><br />
                        <span>{localStorage.getItem('rol')}</span>
                    </div>
                    <div id="navbar-items">
                        <ul>
                            <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                            <NavLink to='/usuarios'><li>Usuarios</li></NavLink>
                            <NavLink to='/productos'><li>Productos</li></NavLink>
                            <NavLink to='/categorias'><li>Categorías</li></NavLink>
                            
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar