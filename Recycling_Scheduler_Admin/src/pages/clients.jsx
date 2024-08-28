import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import search_icon from "../images/search_icon.png";
import Popup from 'reactjs-popup';
import ClientRow from '../components/ClientRow';
import '../stylesheets/table.css'
import AddClientPopup from '../components/Popups/AddClientPopup';
import Menu from '../components/Menu';

import calls from '../helpers/calls'

export default function Clients() {
    /*function reduceOpacity() {
        document.getElementsByClassName("body").style.opacity = "50";
    }*/

    //clients stateful variable and function
    const [clients, setClients] = useState()
    let rows = useRef();

    const [addOpen, setAddOpen] = useState(false)

    const getClients = () => {calls.getClients(setClients)}


    //useEffect hook to get clients list from API on render
    useEffect(() => {
        getClients()
    }, [])

    const generateClient = () => {
        if(clients){
            return clients.map ((client) => 
                <tr><ClientRow client={client} /></tr>
            )
        }else{
            return <h1>Loading...</h1>
        }
    }





    return (
        <>
        <div className="header">
            <img src={logo} className="logo"/>
            <div className="title">Listado de Clientes</div>
            <img src={user_icon} className="user_icon"/>
        </div>
        <div className="body">
            <Menu />
            <div className="table">
                <div className="search_add_btns">
                    <button className="add_client_btn"><div className="add_client" onClick={() => setAddOpen(!addOpen)}>+ Agregar Cliente</div></button>
                    <Popup open={addOpen} onClick={() => calls.createClient()} closeOnDocumentClick>
                       <AddClientPopup setPopupOpen={setAddOpen} /> 
                    </Popup>
                </div>
                <table className='clients-table'>
                    <thead>
                        <tr>
                            <th>Nombre del Cliente</th>
                            <th>Locaciones</th>
                            <th>% Recuperación</th>
                            <th>Frecuencia de Entrega</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateClient()}
                    </tbody>
                </table>
                
                
            </div>
        </div>
        </>
    );
}