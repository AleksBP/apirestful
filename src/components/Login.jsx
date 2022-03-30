import React from 'react';

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
        errorMsg:""
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    manejadorOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    manejadorBoton(){
        let url = ApiURL + "/api/auth/login";
    }

    render(){
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text" id="correo" name="login" placeholder="Correo" onChange={this.manejadorOnChange}/>
                            <input type="text" id="password" name="login" placeholder="Contraseña" onChange={this.manejadorOnChange}/>
                            <br /><br />
                            <input type="submit" value="INGRESAR" onClick={this.manejadorBoton}/>
                        </form>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login