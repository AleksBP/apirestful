import React from 'react'
import '../assets/css/General.css'

// SERVICIOS
import { ApiURL } from '../services/apirest';

// LIBRERIAS
import axios from 'axios';

class Usuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount(){
        let url = ApiURL + "/api/usuarios/";
        axios.get(url)
        .then(response => {
            console.log(response);

            this.setState({
                usuarios: response.data.usuarios
            })
        }).catch(e =>{
            console.log("Error: ", e);
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <b>Usuarios</b>

                </div>

                <div className='page'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.nombre}</td>
                                        <td>{value.correo}</td>
                                        <td>{value.rol}</td>
                                        <td>{value.estado.toString()}</td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Usuarios