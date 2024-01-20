import userServices from "../services/userServices";

const getClients = (setClients) => {
  const fetchPromise = userServices.getAll("clients/getclients");
  fetchPromise.then(response => {
    console.log(response)
    setClients(response.data)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const calls = {
  getClients
}

export default calls;