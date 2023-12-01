import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import search_icon from "../images/search_icon.png";

export default function Clients() {
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
                    <div>Monthly Reports</div>
                    <div>Data Review</div>
                </div>
            </div>
            <div className="table">
                <div className="search_add_btns">
                    <div className="search_bar">
                        <input type="text" className="search_input" placeholder="Search" />
                        <button className="search_icon_btn"><img src={search_icon} className="search_icon"/></button>
                    </div>
                    <button className="add_client_btn"><div className="add_client">+ Add Client</div></button>
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