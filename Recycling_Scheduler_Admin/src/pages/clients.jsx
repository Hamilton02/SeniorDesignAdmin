import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import search_icon from "../images/search_icon.png";
import Popup from 'reactjs-popup';
import ClientRow from '../components/ClientRow';
import '../stylesheets/table.css'

import calls from '../helpers/calls'

export default function Clients() {
    /*function reduceOpacity() {
        document.getElementsByClassName("body").style.opacity = "50";
    }*/

    //clients stateful variable and function
    const [clients, setClients] = useState()
    let rows = useRef();


    //useEffect hook to get clients list from API on render
    useEffect(() => {
        async function getClients(){
            calls.getClients(setClients);
        }

        getClients();
    }, [])

    useEffect(() => {
        async function generateClient(){
            rows.current = clients.map ((client) => 
                <tr><ClientRow client={client} /></tr>
            )
        }

        generateClient()
    }, [clients])


    return (
        <>
        <div className="header">
            <img src={logo} className="logo"/>
            <div className="title">Client List</div>
            <img src={user_icon} className="user_icon"/>
        </div>
        <div className="body">
            <div className="leftnav">
                <div className="list">
                    <div><Link to={'/clients'}>Clients</Link></div>
                    <div><Link to={'/users'}>Users</Link></div>
                    <div><Link to={'/reports'}>Monthly Reports</Link></div>
                    <div>Data Review</div>
                </div>
            </div>
            <div className="table">
                <div className="search_add_btns">
                    <div className="search_bar">
                        <input type="text" className="search_input" placeholder="Search" />
                        <button className="search_icon_btn"><img src={search_icon} className="search_icon"/></button>
                    </div>
                    <Popup trigger={<button className="add_client_btn"><div className="add_client">+ Add Client</div></button>} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                        <div className="popup_body">
                            <div className="popup">
                                <div className="client_info">
                                <div className="popup_header">
                                    <div className="popup_title">Add Client</div>
                                    <button className="popup_close">X</button>
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Client Name:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Location:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Location 2:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <button className="add_location_btn">+ Add Location</button>
                                <div className="popup_field">
                                    <div className="popup_field_title">Pickup Frequency:</div>
                                    <input type="text" className="pickup_frequency_input" placeholder="0 / Week" />
                                </div>
                                </div>
                                <button className="popup_add_client_btn">Add Client</button>
                            </div>
                        </div>
                    </Popup>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Locations</th>
                            <th>Avg. Usability</th>
                            <th>Pickup Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.current}
                    </tbody>
                </table>
                
                
            </div>
        </div>
        </>
    );
}