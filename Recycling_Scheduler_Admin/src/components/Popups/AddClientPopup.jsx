import React, {useState, useEffect, useRef} from 'react'
import calls from '../../helpers/calls'

const AddClientPopup = ({setPopupOpen}) => {

  const [clientname, setClientName] = useState('')
  const [pickup_frequency, setPickupFrequency] = useState([false, false, false, false, false, false])
  const [first_name, setClientContactFirstName] = useState(0)
  const [last_name, setClientContactLastName] = useState(0)
  const [contact_email, setclientContactEmail] = useState('')
  const [contact_phone, setClientContactPhone] = useState('')
  const [locations, setLocations] = useState([])

  const freqChoices = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  
  const n = locations.length;

  const updateLocations = (data, i) => {
    console.log(data)
    let arr = locations;
    arr[i] = data;
    setLocations(arr)
  }

  const genFreqStr = () => {
    let returnStr = ''
    pickup_frequency.forEach((choice, i) => {
      if(choice){
        returnStr += freqChoices[i].substring(0, 3)
        returnStr += " "
        console.log(returnStr)
      }
    })

    return returnStr
  }


  const data = {
    "client": {
      "client_name":clientname,
      "pickup_frequency": genFreqStr(),
      "first_name": first_name,
      "last_name": last_name,
      "contact_email": contact_email,
      "contact_phone": contact_phone,
      "locations": locations
    }
  }


    const generateLocation = () => {
      if(locations){
      return( [...Array(n)].map((location, i) => 
        <>
          <LocationItem i={i} updateLocations={updateLocations} />
        </>
        )
      )
      }

      
    }

    const genFreqButtons = () => {
      return freqChoices.map((choice, i) => 
        <button 
          className={pickup_frequency[i] ? "selected" : "not-selected"}
          onClick={() =>  {
            let arr = [...pickup_frequency]
            arr[i] = !arr[i]
            setPickupFrequency(arr)
            console.log(pickup_frequency)
          }}
        >{choice}</button>
      )
    }


    useEffect(() => {
      generateLocation()
    }, [])

    const onSubmit = () => {
      calls.createClient(data)
      setPopupOpen(false)
    }



  return (
    <div className="popup_body">
      <div className="popup">
          <div className="client_info">
          <div className="popup_header">
              <div className="popup_title">Agregar Cliente</div>
              <button className="popup_close" onClick={() => setPopupOpen(false)}>X</button>
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Nombre:</div>
              <input type="text" className="popup_field_input"  onChange={(e) => setClientName(e.target.value)}/>
          </div>
          {generateLocation()}

          <button className="add_location_btn" onClick={() => {
            let arr = [...locations]
            arr.push({
              name: "",
              address: "",
              contact_name: "",
              contact_phone: ""
            })
            console.log(locations)
            setLocations(arr)}}>+ Agregar Locacion</button>
          <div className="popup_field">
              <div className="popup_field_title">Frecuencia de Entrega:</div>
              {genFreqButtons()}
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Persona de Contacto:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactFirstName(e.target.value)} />
          </div>

          <div className="popup_field">
              <div className="popup_field_title">Contacto Apellido:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactLastName(e.target.value)} />
          </div>

          <div className="popup_field">
              <div className="popup_field_title">Email de contacto:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setclientContactEmail(e.target.value)} />
          </div>
          <div className="popup_field">
              <div className="popup_field_title">Teléfono de contacto:</div>
              <input type="text" className="pickup_frequency_input" onChange={(e) => setClientContactPhone(e.target.value)} />
          </div>
          </div>
          <button className="popup_add_client_btn" onClick={() =>  onSubmit() }>Agregar Cliente</button>
      </div>
  </div>
  )
}

const LocationItem = ({i, updateLocations}) => {

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [contact_name, setContactName] = useState('')
  const [contact_phone, setContactPhone] = useState('')

  const data = {
      name: name,
      address: location,
      contact_name: contact_name,
      contact_phone: contact_phone
  }

  useEffect(() => {
    updateLocations(data, i)
  }, [name, location, contact_name, contact_phone])

  return (
    <>
        <div className="popup_field">
              <div className="popup_field_title">Locacion {i + 1}:</div>
              <input  onChange={(e) => {
                setName(e.target.value)
                console.log(i)
              }} type="text" className="popup_field_input" />
        </div>
        <div className='popup_field'>
              <div className="popup_field_title" >Dirrcción {i + 1}:</div>
              <input onChange={(e) => {
                setLocation(e.target.value)
              }} type="text" className="popup_field_input" />
        </div>
        <div className='popup_field'>
              <div className="popup_field_title" >Location Contact {i + 1}:</div>
              <input onChange={(e) => {
                setContactName(e.target.value)
              }} type="text" className="popup_field_input" />
        </div>
        <div className='popup_field'>
              <div className="popup_field_title" >Location Contact {i + 1} Phone:</div>
              <input onChange={(e) => {
                setContactPhone(e.target.value)
              }} type="text" className="popup_field_input" />
        </div>
      </>
  )

}

export default AddClientPopup
