import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import edit_icon from "../images/edit_icon.png";
import delete_icon from "../images/delete_icon.png";
import Popup from 'reactjs-popup';
import calls from '../helpers/calls';
import { useParams } from 'react-router-dom';

/*can add padding to the Pickup Date to fix spacing issue - line 63*/
export default function Client_Details() {

  const [client, setClient] = useState(null);

  const {clientid } = useParams()

  useEffect(() => {
    async function getClient(){
      calls.getClient(clientid, setClient)
    }

    getClient()
  }, [])





    return (
      <>
        <div className="header">
          <img src={logo} className="logo" />
          <div className="title"></div>
          <img src={user_icon} className="user_icon" />
        </div>
        <div className="body">
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
                <div className="client_info">
                    <div className="client_name">{client.clientname}</div>
                    <div className="client_contact_info">
                    {client.first_name} {client.last_name}
                    <br /><br />
                    {client.contact_email}
                    <br /><br />
                    {client.contact_number}
                    </div>
                </div>
                <div className="pickup_info">
                    Locations: {client.locations}
                    <br /><br />
                    Pickup Frequency: {client.pickup_frequency} per week
                    <br /><br />
                    Avg. Percent Usable: {client.avg_usability}%
                    <br /><br />
                    Avg. Weight / Pickup: # Kilos
                    <br /><br />
                </div>
                <Popup trigger={<img src={edit_icon} className="edit_icon" />} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                    <div className="popup_body">
                        <div className="popup">
                            <div className="client_info">
                            <div className="popup_header">
                                <div className="popup_title">Edit Client</div>
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
                                <input type="text" className="pickup_frequency_input" placeholder="2 / Week" />
                            </div>
                            </div>
                            <button className="popup_add_client_btn">Edit Client</button>
                        </div>
                    </div>
                </Popup>
                <img src={delete_icon} className="delete_icon" />
                </div>
            </div>
            <div className="client_details_table">
            <div className="table">
                <div className="row-th">
                <div className="th">
                    <div className="firstItem">Pickup Date</div>
                    <div>Total Weight</div>
                    <div>Avg. Usability</div>
                    <div>Cardboard</div>
                    <div>Paper</div>
                    <div>Colored Paper</div>
                    <div>Nylon</div>
                    <div>Metal</div>
                    <div>Plastic</div>
                </div>
                </div>
                <div className="table-rows">
                <div className="td-top-corners-yellow">
                    <div>XX/XX/XX</div>
                    <div>X Kilos</div>
                    <div>X%</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                </div>
                <div className="td-rect-white">
                    <div>XX/XX/XX</div>
                    <div>X Kilos</div>
                    <div>X%</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                </div>
                <div className="td-rect-yellow">
                    <div>XX/XX/XX</div>
                    <div>X Kilos</div>
                    <div>X%</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                    <div>X Kilos</div>
                </div>
                <div className="td-bottom-corners-white">
                    <div>XX/XX/XX</div>
                    <div>X Kilos</div>
                    <div>X%</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </>
    );
}