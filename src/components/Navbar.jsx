import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/css/Navbar.css';

class Navbar extends React.Component{

    open_dropdown(){
        console.log("Cerrando sesion");
        let drop = document.getElementById("cerrarSesion-item");

        if ((drop.style.display == "") || (drop.style.display == "none")){
            drop.style.display = "block";
        }else{
            drop.style.display = "none";
        }

    }

    cerrarSesion(){
        localStorage.clear();
        window.location.replace("/");
    }

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
                <div id="cerrarSesion">
                    <a className='btn btn-engrane' onClick={this.open_dropdown}>
                        <img id="engrane" src={require('../assets/img/engrane.png')} />
                    </a>
                </div>
                <div id="cerrarSesion-item" >
                    <a href="#" onClick={this.cerrarSesion}>Cerrar sesión</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar