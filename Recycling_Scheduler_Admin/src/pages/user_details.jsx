import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import edit_icon from "../images/edit_icon.png";
import delete_icon from "../images/delete_icon.png";
import Popup from 'reactjs-popup';
import calls from '../helpers/calls';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import EditUser from '../components/Popups/EditUser';
import DeleteUser from '../components/Popups/DeleteUser';
import filter from '../helpers/sanitizeData';

/*can add padding to the Pickup Date to fix spacing issue - line 63*/
export default function User_Details() {

  const [user, setUser] = useState(null);
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const { userid } = useParams()

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
            
          <Menu />
          <div className="client_details_and_table">
            <div className="client_details_box">
                <div className="client_details">
                <img src={user_icon} className="user_icon" />
                <div className="client_info">
                    <div className="client_name">{user.first_name} {user.last_name}</div>
                    <div className="client_contact_info">
                    {user.email}
                    <br /><br />
                    {user.phone} 
                    <br /><br />
                    Rol: {filter.roleTranslate(user.role)}
                    </div>
                </div>
                <button className="btn-clear" onClick={() => setEditOpen(!editOpen)}><img src={edit_icon} className="edit_icon" /></button>
                <Popup open={editOpen} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                    <EditUser user={user} closePopup={setEditOpen}/>
                </Popup>
                <button className="btn-clear" onClick={() => setDeleteOpen(!deleteOpen)}><img src={delete_icon} className="delete_icon" /></button>
                <Popup open={deleteOpen} closeOnDocumentClick>
                  <DeleteUser user={user} closePopup={setDeleteOpen}/>
                </Popup>
                </div>
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }else{

    setTimeout(() => {
      calls.getUser(userid, setUser)
    }, 1000)
    display.current=<></>
  }


    return (
      display.current
    );
}