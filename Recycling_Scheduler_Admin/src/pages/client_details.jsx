import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import edit_icon from "../images/edit_icon.png";
import delete_icon from "../images/delete_icon.png";

/*can add padding to the Pickup Date to fix spacing issue - line 63*/
export default function Client_Details() {
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
                    <div className="client_name">Client Name</div>
                    <div className="client_contact_info">
                    Contact Name
                    <br /><br />
                    Contact@email.com
                    <br /><br />
                    (###) ###-####{" "}
                    </div>
                </div>
                <div className="pickup_info">
                    Locations: #
                    <br /><br />
                    Pickup Frequency: X per week
                    <br /><br />
                    Avg. Percent Usable: #%
                    <br /><br />
                    Avg. Weight / Pickup: # Kilos
                    <br /><br />
                </div>
                <img src={edit_icon} className="edit_icon" />
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