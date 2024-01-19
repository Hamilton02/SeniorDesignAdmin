import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import Popup from 'reactjs-popup';

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
                    <div><Link to={'/reports'}>Monthly Reports</Link></div>
                    <div>Data Review</div>
                </div>
            </div>
            <div className="table">
                <div className="search_add_btns">
                    <Popup trigger={<button className="add_user_btn"><div className="add_user">+ Add User</div></button>} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                        <div className="popup_body">
                            <div className="popup">
                                <div className="client_info">
                                <div className="popup_header">
                                    <div className="popup_title">Add User</div>
                                    <button className="popup_close">X</button>
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">First Name:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Last Name:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Email:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                <div className="popup_field">
                                    <div className="popup_field_title">Role:</div>
                                    <input type="text" className="popup_field_input" />
                                </div>
                                </div>
                                <button className="popup_add_client_btn">Add User</button>
                            </div>
                        </div>
                    </Popup>
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