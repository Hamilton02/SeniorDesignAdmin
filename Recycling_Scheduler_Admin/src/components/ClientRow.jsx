import React from 'react'
import '../stylesheets/table.css'
import { Link } from 'react-router-dom'

const ClientRow = ({client}) => {
  return (
    <>
      <td><Link to={`/client_details/${client.clientid}`}>{client.clientname}</Link></td>
      <td>{client.locations}</td>
      <td>{client.avg_usability}</td>
      <td>{client.pickup_frequency}</td>
    </>
  )
}

export default ClientRow
