import React from 'react'
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    <div className="header">
        <img src={logo} className="logo"/>
        <img src={user_icon} className="user_icon"/>
    </div>
    <div className="body">
        <div className="leftnav-landing">
            <div className="list">
                <div><Link to={'/clients'}>Clientes</Link></div>
                <div><Link to={'/users'}>Usuarios</Link></div>
                <div><Link to={'materials'}>Materiales</Link></div>
            </div>
        </div>
    </div>
  </>
  )
}

export default LandingPage
