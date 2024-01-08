import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import search_icon from "../images/search_icon.png";
import Popup from 'reactjs-popup';

export default function Clients() {
    /*function reduceOpacity() {
        document.getElementsByClassName("body").style.opacity = "50";
    }*/

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
                <div className="row-th">
                    <div className="th">
                        <div>Client Name</div>
                        <div>Locations</div>
                        <div>Avg. Usability</div>
                        <div>Pickup Frequency</div>
                    </div>
                </div>
                <div className="table-rows">
                    <div className="td-top-corners-yellow">
                        <Link to={'/client_details'}><div>Client</div></Link>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-rect-white">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-rect-yellow">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-rect-white">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-rect-yellow">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-rect-white">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                    <div className="td-bottom-corners-yellow">
                        <div>Client</div>
                        <div>X</div>
                        <div>X%</div>
                        <div>Twice a week</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}