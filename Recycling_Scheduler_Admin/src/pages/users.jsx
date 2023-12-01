import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";

export default function Users() {
    return (
        <>
        <div className="header">
            <img src={logo} className="logo"/>
            <div className="title">Users</div>
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
                    <button className="add_client_btn"><div className="add_client">+ Add Client</div></button>
                </div>
                <div className="row-th">
                    <div className="th">
                        <div>Name</div>
                        <div>Role</div>
                    </div>
                </div>
                <div className="table-rows">
                    <div className="td-top-corners-yellow">
                        <div>First Last</div>
                        <div>Collector</div>
                    </div>
                    <div className="td-rect-white">
                        <div>First Last</div>
                        <div>Collector<br></br>Classifier</div>
                    </div>
                    <div className="td-rect-yellow">
                        <div>First Last</div>
                        <div>Classifier</div>
                    </div>
                    <div className="td-rect-white">
                        <div>First Last</div>
                        <div>Classifier</div>
                    </div>
                    <div className="td-rect-yellow">
                        <div>First Last</div>
                        <div>Classifier</div>
                    </div>
                    <div className="td-rect-white">
                        <div>First Last</div>
                        <div>Collector<br></br>Classifier</div>
                    </div>
                    <div className="td-bottom-corners-yellow">
                        <div>First Last</div>
                        <div>Admin</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}