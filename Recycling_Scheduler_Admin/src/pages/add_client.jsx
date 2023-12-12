import React from 'react'
import { Link } from 'react-router-dom';

export default function Add_Client() {
    return (
      <>
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
      </>
    );
}