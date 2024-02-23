import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import edit_icon from "../images/edit_icon.png";
import delete_icon from "../images/delete_icon.png";
import Popup from 'reactjs-popup';
import calls from '../helpers/calls';
import { useParams } from 'react-router-dom';

/*can add padding to the Pickup Date to fix spacing issue - line 63*/
export default function User_Details() {

  const [user, setUser] = useState(null);

  const {userid } = useParams()

  useEffect(() => {
    async function getUser(){
      calls.getUser(userid, setUser)
    }

    getUser()
  }, [])


  let display = useRef()

  if(user){
    display.current = (
      <>
        <div className="header">
          <img src={logo} className="logo" />
          <div className="title"></div>
          <img src={user_icon} className="user_icon" />
        </div>
        <div className="body_client_details">
          <div className="nav_and_client_details">
          <div className="leftnav">
            <div className="list">
              <div>
                <Link to={"/clients"}>Clients</Link>
              </div>
              <div>
                <Link to={"/users"}>Users</Link>
              </div>
              <div>
                <Link to={"/reports"}>Monthly Reports</Link>
              </div>
              <div>Data Review</div>
            </div>
          </div>
          <div className="client_details_and_table">
            <div className="client_details_box">
                <div className="client_details">
                <img src={user_icon} className="user_icon" />
                <div className="client_info">
                    <div className="client_name">{user.first_name} {user.last_name}</div>
                    <div className="client_contact_info">
                    {user.contact_email}
                    <br /><br />
                    {user.contact_number}
                    <br /><br />
                    Role: {user.role}
                    </div>
                </div>
                <Popup trigger={<img src={edit_icon} className="edit_icon" />} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                    <div className="popup_body">
                        <div className="popup">
                            <div className="client_info">
                            <div className="popup_header">
                                <div className="popup_title">Edit User</div>
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
                            <button className="popup_add_client_btn">Edit User</button>
                        </div>
                    </div>
                </Popup>
                <img src={delete_icon} className="delete_icon" />
                </div>
            </div>
          </div>
          </div>
          <div className="client_details_table">
            <div className="table_client_details">
                <div className="row-th">
                <div className="th">
                    <div className="firstItem">Activity Date</div>
                    <div>Activity Type</div>
                    <div>Object Affected</div>
                </div>
                </div>
                <div className="table-rows">
                <div className="td-top-corners-yellow">
                    <div>XX/XX/XX</div>
                    <div>Submit Pickup</div>
                    <div>Pickup X</div>
                </div>
                <div className="td-rect-white">
                    <div>XX/XX/XX</div>
                    <div>Edit Pickup</div>
                    <div>Pickup X</div>
                </div>
                <div className="td-rect-yellow">
                    <div>XX/XX/XX</div>
                    <div>Delete Pickup</div>
                    <div>Pickup X</div>
                </div>
                <div className="td-bottom-corners-white">
                    <div>XX/XX/XX</div>
                    <div>Add Pickup</div>
                    <div>Pickup X</div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }else{

    setTimeout(() => {
      calls.getClient(userid, setUser)
    }, 1000)
    display.current=<></>
  }


    return (
      display.current
    );
}