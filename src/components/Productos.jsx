import axios from 'axios';
import React from 'react'
import '../assets/css/General.css'
import { ApiURL } from '../services/apirest';

class Productos extends React.Component{

    state={
        productos:[]
    }

    componentDidMount(){
        let url = ApiURL + "/api/productos/?desde=0&limite=3"
        axios.get(url)
        .then(response =>{
            console.log(response);
            this.setState({
                productos: response.data.productos
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
                    <b>Productos</b>
                </div>

                <div className='page'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Disponible</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productos.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.nombre}</td>
                                        <td>{value.precio}</td>
                                        <td>{value.disponible.toString()}</td>
                                        <td>{value.categoria.nombre}</td>
                                        <td><img src={value.img}/></td>
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

export default Productos