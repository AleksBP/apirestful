import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import '../assets/css/Login.css';

// SERVICIOS
import { ApiURL } from '../services/apirest';

// LIBRERIAS
import axios from 'axios';

class Login extends React.Component{

    state={
        form:{
            "correo":"",
            "password":""
        },
        error:false,
        errorMsg:"* Usuario o contraseña incorrectos"
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    manejadorOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        })
    }

    manejadorBoton=()=>{
        let url = ApiURL + "/api/auth/login";
        axios.post(url, this.state.form)
        .then(response=>{
            if (response.statusText === "OK"){
                this.setState({
                    error: false
                })
                localStorage.setItem('nombre', response.data.usuario.nombre);
                localStorage.setItem('correo', response.data.usuario.correo);
                localStorage.setItem('estado', response.data.usuario.estado);
                localStorage.setItem('google', response.data.usuario.google);
                localStorage.setItem('img', response.data.usuario.img);
                localStorage.setItem('rol', response.data.usuario.rol);
                localStorage.setItem('uid', response.data.usuario.uid);
                window.location.replace("/dashboard");
                

            }else{
                console.log("Error: ", response.statusText);
            }
        }).catch(e=>{
            this.setState({
                error: true,
                errorMsg: "* Usuario o contraseña incorrectos"
            });
        });

    }

    render(){
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div id="loginHeader">
                            <h1>API RESTful</h1>
                            <h4>PKT1</h4>
                        </div>

                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text" id="correo" placeholder="Correo" onChange={this.manejadorOnChange}/>
                            <input type="text" id="password" placeholder="Contraseña" onChange={this.manejadorOnChange}/>
                            <br />
                            {this.state.error === true &&
                                <div>{this.state.errorMsg}</div>
                            }
                            {this.state.error === false &&
                                <br />
                            }
                            <br />
                            <input type="submit" value="INGRESAR" onClick={this.manejadorBoton}/>
                        </form>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login