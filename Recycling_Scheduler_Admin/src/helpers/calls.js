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

const getClient = (id, setClient) => {
  const fetchPromise = userServices.get(id, "clients/getclient");
  fetchPromise.then(response => {
    console.log(response)
    setClient(response.data[0])
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createClient = (data, setResponse) => {
  console.log(data)
  const fetchPromise = userServices.create(data, "clients/createclient");
  fetchPromise.then(response => {
    console.log(response)
    setResponse(response)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const calls = {
  getClients,
  getClient,
  createClient
}

export default calls;