import React from 'react'

import '../assets/css/Login.css'

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Correo"/>
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña"/>
                            <br /><br />
                            <input type="submit" className="fadeIn fourth" value="INGRESAR"/>
                        </form>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login