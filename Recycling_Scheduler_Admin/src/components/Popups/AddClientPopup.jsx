import React, {useState, useEffect, useRef} from 'react'
import calls from '../../helpers/calls'

const AddClientPopup = () => {

  const [locations, setLocations] = useState(1)

  const [clientname, setClientName] = useState('')
  const [pickup_frequency, setClientPickupFrequency] = useState(0)
  const [first_name, setClientContactFirstName] = useState(0)
  const [last_name, setClientContactLastName] = useState(0)
  const [contact_email, setclientContactEmail] = useState('')
  const [contact_phone, setClientContactPhone] = useState('')

  const n = locations;

  const data = {
    clientname,
    pickup_frequency,
    locations,
    first_name,
    last_name,
    contact_email,
    contact_phone
  }

    const generateLocation = () => {
      if(locations){
      return( [...Array(n)].map((i) => 
        <div className="popup_field">
              <div className="popup_field_title">Location:</div>
              <input type="text" className="popup_field_input" />
        </div>
        )
      )
      }

      
    }

    useEffect(() => {
      generateLocation()
    }, [])



  return (
    <div className="popup_body">
      <div className="popup">
          <div className="client_info">
          <div className="popup_header">
              <div className="popup_title">Add Client</div>
              <button className="popup_close">X</button>
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Client Name:</div>
              <input type="text" className="popup_field_input"  onChange={(e) => setClientName(e.target.value)}/>
          </div>
          {generateLocation()}

          <button className="add_location_btn" onClick={() => setLocations(locations+1)}>+ Add Location</button>
          <div className="popup_field">
              <div className="popup_field_title">Pickup Frequency:</div>
              <input type="text" className="pickup_frequency_input" placeholder="0 / Week" onChange={(e) => setClientPickupFrequency(e.target.value)} />
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Contact First Name:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactFirstName(e.target.value)} />
          </div>

          <div className="popup_field">
              <div className="popup_field_title">Contact Last Name:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactLastName(e.target.value)} />
          </div>

          <div className="popup_field">
              <div className="popup_field_title">Contact Email:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setclientContactEmail(e.target.value)} />
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Contact Phone:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactPhone(e.target.value)} />
          </div>
          </div>
          <button className="popup_add_client_btn" onClick={() => calls.createClient(data)}>Add Client</button>
      </div>
  </div>
  )
}

export default AddClientPopup
