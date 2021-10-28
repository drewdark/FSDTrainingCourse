import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


function Update() {
  const [id, setID] = useState('');
  const [phone, setPhone] = useState('');

  const callMockAPI = () => {
    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${id}`;
    const endpointURL = `http://localhost:8080/requests?id=${id}&phone=${phone}`;
    axios.put(endpointURL)
      .then(alert('Phone number successfully updated.'))
      .catch(err => console.log(err));
  }

  const handleChangeID = (driverID) => {

    setID(driverID);
    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${driverID}`;
    const endpointURL = `http://localhost:8080/requests/${driverID}`;
    axios.get(endpointURL)
      .then(response => document.getElementById("phone").value = response.data.phone)
      .catch(err => alertNoRecordFound(err,driverID))
  }

  const alertNoRecordFound = (err,driverID) =>
  {
    console.log(err);
    alert('No record found with Driver ID ' + driverID);
    document.getElementById("driverIDUpdate").value = '';
    document.getElementById("phone").value = '';
  }

  return (
    <div className="Update">

      <br />

      <Form>
        <Form.Input
          fluid
          id='driverIDUpdate'
          label='Driver ID'
          placeholder='Driver ID'
          onBlur={e => handleChangeID(e.target.value)}
          width={4}
        />
        <Form.Input
          fluid
          id='phone'
          label='Phone Number'
          placeholder='Phone Number'
          onChange={e => setPhone(e.target.value)}
          width={4}
        />
        <Button
          onClick={callMockAPI}
        >Update</Button>


      </Form>

    </div>
  );
}


export default Update;
