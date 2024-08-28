import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import edit_icon from "../images/edit_icon.png";
import delete_icon from "../images/delete_icon.png";
import Popup from 'reactjs-popup';
import calls from '../helpers/calls';
import PickupsTable from '../components/PickupsTable';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import filter from '../helpers/sanitizeData';
import DownloadReport from '../components/Popups/DownloadReport';
import DeleteClient from '../components/Popups/DeleteClient';
import EditClientPopup from '../components/Popups/EditClientPopup';

/*can add padding to the Pickup Date to fix spacing issue - line 63*/
export default function Client_Details() {

  const [client, setClient] = useState(null);
  const [pickups, setPickups] = useState([])
  const [focusCol, setFocusCol] = useState(null)
  const [genrateReport, setGenerateReport] = useState(false)
  const [locationExpand, setLocationExpand] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const { clientid } = useParams()

  useEffect(() => {
    async function getClient(){
      calls.getClient(clientid, setClient)
    }

    getClient()
  }, [])

  useEffect(() => {
    const getPickups = () => {
      if(client)
        setPickups(client.pickups)
    }

    getPickups()
  }, [client])

  let sorted
  const sortFunc = (field) => {
    setFocusCol(field)
    sorted = filter.sort(pickups, field)
    
    let differences = 0;

    for(let i = 0; i < pickups.length; i++){
      if(plans[i] !== sorted[i]){
        differences++;
        setPickups(sorted)
        break;
      }
    }

    if(differences === 0){
      setPickups(sorted.reverse())
    }



  }

  //getter for focusCol
  const getFocusCol = () => {
    return focusCol;
  }

  const mapLocations = () => {
    if(client.locations){
      return client.locations.map((location) => 
        <>
          <h4>{location.name} - {location.address}</h4>
          <p>{location.contact_name} {location.contact_phone}</p>
        </>
      )
    }
  }


  let display = useRef()

  if(client){
    console.log(typeof(client.avg_usability))
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
                <div className="client_info">
                    <div className="client_name">{client.client_name}</div>
                    <div className="client_contact_info">
                    {client.first_name} {client.last_name}
                    <br /><br />
                    {client.contact_email}
                    <br /><br />
                    {client.contact_number}
                    </div>
                </div>
                <div className="pickup_info"> 
                  Locaciones: {client.locations.length} <button onClick={() => setLocationExpand(!locationExpand)}>Expandir</button>
                    {locationExpand ? mapLocations() : <></>}
                    <br /><br />
                    Frecuencia de Entrega: {client.pickup_frequency} por semana
                    <br /><br />
                    % Recuperación: {typeof(Number(client.avg_usability)) === 'number' ? client.avg_usability.toFixed(2) : 'N/A'}%
                    <br /><br />
                </div>
                <button className='btn-clear' onClick={() => setEditOpen(!editOpen)}><img src={edit_icon} className="edit_icon" /></button>
                <Popup open={editOpen} /*onClick={reduceOpacity()}*/ closeOnDocumentClick>
                    <EditClientPopup client={client} popupOpen={setEditOpen} />
                </Popup>
                <button className="btn-clear" onClick={() => setDeleteOpen(!deleteOpen)}><img src={delete_icon} className="delete_icon" /></button>
                <Popup open={deleteOpen} closeOnDocumentClick>
                  <DeleteClient client={client} closePopup={setDeleteOpen}/>
                </Popup>
                </div>
            </div>
          </div>
          </div>
          {client.pickups.length > 0 ? <button onClick={() => setGenerateReport(!genrateReport)} className='gen-report'>Exportar información</button> : <></>}
          {genrateReport ? <DownloadReport client={client} pickups={client.pickups} /> : <></> }
          <div className='pickups-table-wrapper'>
            <PickupsTable pickups={client.pickups} sortFunc={sortFunc} getFocusCol={getFocusCol} />
          </div>
        </div>
      </>
    )
  }else{

    setTimeout(() => {
      calls.getClient(clientid, setClient)
    }, 1000)
    display.current=(
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
              <div className="client_info">
                  <div className="client_name">Loading...</div>
              </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
      )
  }


    return (
      display.current
    );
}