import React from 'react'

class Dashboard extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='header'>
                    <b>Dashboard</b> - Bienvenido {localStorage.getItem('nombre')}
                </div>
                <div className='page-profile-card'>
                    <br />
                    <h3><b>Datos del perfil</b></h3>
                    <br /><br />
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" className='text-muted' value={localStorage.getItem('nombre')} disabled='1'/>
                            <br /><br />
                            <label htmlFor="rol">Rol</label>
                            <input type="text" id="rol" className='text-muted' value={localStorage.getItem('rol')} disabled='1'/>
                            <br /><br />
                            <label htmlFor="google">Cuenta google</label>
                            <input type="text" id="google" className='text-muted' value={localStorage.getItem('google')} disabled='1'/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="text" id="correo" className='text-muted' value={localStorage.getItem('correo')} disabled='1'/>
                            <br /><br />
                            <label htmlFor="estado">Estado</label>
                            <input type="text" id="estado" className='text-muted' value={localStorage.getItem('estado')} disabled='1'/>
                            <br /><br />
                            <label htmlFor="uid">UID</label>
                            <input type="text" id="uid" className='text-muted' value={localStorage.getItem('uid')}   disabled='1'/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard