import userServices from "../services/userServices";

const getClients = (setClients) => {
  const fetchPromise = userServices.getAll("api/client");
  fetchPromise.then(response => {
    console.log(response)
    setClients(response.data.clients)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getClient = (id, setClient) => {
  const fetchPromise = userServices.get(id, "api/client");
  fetchPromise.then(response => {
    console.log(response)
    setClient(response.data.client)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createClient = (data, setResponse) => {
  console.log(data)
  const fetchPromise = userServices.create(data, "api/client");
  fetchPromise.then(response => {
    console.log(response)
    setResponse(response)
    window.location.reload()
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const deleteClient = (id) => {
  const fetchPromise = userServices.remove(id, "api/client");
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const editClient = (data, id) => {
  const fetchPromise = userServices.update(id, data, "api/client");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
  })
  .catch((e) => {
    console.log(e);
  }); 

}

const getUsers = (setUsers) => {
  const fetchPromise = userServices.getAll("api/user");
  fetchPromise.then(response => {
    console.log(response)
    setUsers(response.data.users)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getUser = (id, setUser) => {
  const fetchPromise = userServices.get(id, "api/user");
  fetchPromise.then(response => {
    console.log(response)
    setUser(response.data.user)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createUser = (data) => {
  const fetchPromise = userServices.create(data, "api/user");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const editUser = (data, id) => {
  const fetchPromise = userServices.update(id, data, "api/user");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const deleteUser = (id) => {
  const fetchPromise = userServices.remove(id, "api/user");
  fetchPromise.then(response => {
    console.log(response)
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getPickup = async(id, setPickup) => {
  const fetchPromise = userServices.get(id, "api/pickup");
  fetchPromise.then(response => {
    console.log(response)
    setPickup(response.data.pickup)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getClientPickups = (id, setPickups) => {
  const fetchPromise = userServices.get(id, "api/pickup");
  fetchPromise.then(response => {
    console.log(response)
    setPickups(response.data)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getReportPickups = (id, setPickups) => {
  const fetchPromise = userServices.get(id, "api/pickup");
  fetchPromise.then(response => {
    console.log(response)
    let pickupList = response.data.pickups


    console.log(pickupList)
    setPickups(pickupList)
    
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const getMaterials = (setMaterials) => {
  const fetchPromise = userServices.getAll("api/categories");
  fetchPromise.then(response => {
    console.log(response)
    setMaterials(response.data.categories)
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const addMaterial = (data) => {
  const fetchPromise = userServices.create(data, "api/categories");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const deleteMaterial = (id) => {
  const fetchPromise = userServices.remove(id, "api/categories");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const editMaterial = (data, id) => {
  const fetchPromise = userServices.update(id, data, "api/categories");
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload()
  })
  .catch((e) => {
    console.log(e);
  }); 
}


const calls = {
  getClients,
  getClient,
  createClient,
  editClient,
  getUsers,
  getUser,
  createUser,
  getPickup,
  getClientPickups,
  getReportPickups,
  editUser,
  deleteUser,
  deleteClient,
  getMaterials,
  addMaterial,
  deleteMaterial,
  editMaterial
}

export default calls;