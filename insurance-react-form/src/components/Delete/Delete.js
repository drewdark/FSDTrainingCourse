import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

function Delete() {

  const [id, setID] = useState('');

  const callMockAPI = () => {

    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${id}`;
    const endpointURL = `http://localhost:8080/requests/${id}`;
    axios.delete(endpointURL)
      .then(alert('Record has been successfully deleted.'))
      .catch(err => console.log(err));
  }

  const handleChangeID = (driverID) => {

    setID(driverID);
    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${driverID}`;
    const endpointURL = `http://localhost:8080/requests/${driverID}`;
    axios.get(endpointURL)
      .catch(err => alertNoRecordFound(err,driverID))
  }

  const alertNoRecordFound = (err,driverID) =>
  {
    console.log(err);
    alert('No record found with Driver ID ' + driverID);
    document.getElementById("driverIDDelete").value = '';
  }

  return (
    <div className="Delete">

      <br />

      <Form>
        <Form.Input
          fluid
          id='driverIDDelete'
          label='Driver ID'
          placeholder='Driver ID'
          onBlur={e => handleChangeID(e.target.value)}
          width={4}
        />
        <Button
          type='submit'
          onClick={callMockAPI}
        >Delete</Button>
      </Form>

    </div>
  );



}

export default Delete;
