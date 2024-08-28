import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import Popup from 'reactjs-popup';
import calls from '../helpers/calls';
import UsersTable from '../components/UsersTable';
import Menu from '../components/Menu';

export default function Users() {

    let display

    const [userdata, setUserdata] = useState([])
    const [first_name, setFirstName ] = useState('')
    const [last_name, setLastName] = useState('')
    const [role, setRole] = useState('')

    const [addOpen, setAddOpen] = useState(false)

    const getUsers = () => {calls.getUsers(setUserdata)}

    const handleSubmit = () => {
        const data = {
            "user": {
                "first_name": first_name,
                "last_name": last_name,
                "role": role
            }
        }

        calls.createUser(data)
    }


    useEffect(() => {
        getUsers()
    }, [])

    if(userdata){
        display = <UsersTable users={userdata} />
    }else{
        display = <h1>Loading...</h1>
    }

    return (
        <>
        <div className="header">
            <img src={logo} className="logo"/>
            <div className="title">Usuarios</div>
            <img src={user_icon} className="user_icon"/>
        </div>
        <div className="body">
           <Menu />
            <div className="table">
                <div className="search_add_btns">
                    <button className="add_user_btn"><div className="add_user" onClick={() => setAddOpen(!addOpen)}>+ Agregar Usuario</div></button>
                    <Popup open={addOpen} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                        <div className="popup_body">
                            <div className="popup">
                                <div className="client_info">
                                <div className="popup_header">
                                    <div className="popup_title">Agregar Usuario</div>
                                    <button className="popup_close" onClick={() => setAddOpen(false)}>X</button>
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Nombre:</div>
                                    <input type="text" className="popup_field_input" onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Apellido:</div>
                                    <input type="text" className="popup_field_input" onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Rol:</div>
                                    <select className="popup_field_input" value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="" selected="true" disabled="disabled">Seleccionar</option>
                                        <option value="admin">Administrador</option>
                                        <option value="collector">Receptor</option>
                                        <option value="classifier">Clasificador</option>
                                        <option value="both">Receptor & Clasificador</option>
                                    </select>
                                </div>
                                </div>
                                <button className="popup_add_client_btn" onClick={() => handleSubmit()}>Add User</button>
                            </div>
                        </div>
                    </Popup>
                </div>
                <div className='table-rows'>
                    {display}
                </div>
            </div>
        </div>
        </>
    );
}