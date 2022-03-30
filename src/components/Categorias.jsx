import axios from 'axios';
import React from 'react'
import '../assets/css/General.css'
import { ApiURL } from '../services/apirest';

class Categorias extends React.Component{

    state={
        categorias:[]
    }

    componentDidMount(){
        let url = ApiURL + '/api/categorias/';
        axios.get(url)
        .then(response => {
            this.setState({
                categorias: response.data.categorias
            })
        })
        .catch(e => {
            console.log("Error: ", e);
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className='header'>
                    <b>Categorías</b>
                </div>

                <div className='page'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categorias.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value._id}</td>
                                        <td>{value.nombre}</td>
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

export default Categorias