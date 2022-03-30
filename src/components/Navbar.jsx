import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/css/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="navbar">
                    <span>IMAGEN PP</span><br />
                    <span>Título</span><br />
                    <ul>
                        <li>
                            <NavLink to='/usuarios'>Usuarios</NavLink>
                        </li>
                        <li>
                            <NavLink to='/productos'>Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/categorias'>Categorías</NavLink>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar