import React, { useState } from 'react';
import { Button, Form, Modal, Header } from 'semantic-ui-react';
import axios from 'axios';

function Delete() {

  const [id, setID] = useState('');
  const [requestData, setRequestData] = useState([]);

  const callMockAPI = () => {

    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${id}`;
    const endpointURL = `http://localhost:8080/requests/${id}`;
    axios.delete(endpointURL)
      .then(setOpen(false))
      .catch(err => console.log(err));
  }

  const handleChangeID = (driverID) => {

    setID(driverID);
    //const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${driverID}`;
    const endpointURL = `http://localhost:8080/requests/${driverID}`;
    axios.get(endpointURL)
      .then(response => setRequestData(response.data))
      .catch(err => alertNoRecordFound(err, driverID))
  }

  const alertNoRecordFound = (err, driverID) => {
    console.log(err);
    alert('No record found with Driver ID ' + driverID);
    document.getElementById("driverIDDelete").value = '';
  }

  const [open, setOpen] = React.useState(false)

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

        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Delete</Button>}
        >
          <Modal.Header>Delete Record</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Are you sure you want to delete this record?</Header>
              <strong>Customer Details</strong>
              <p>{requestData.prefix} {requestData.firstname} {requestData.lastname}</p>
              <p> 
              {requestData.addressLine1} {requestData.addressLine2}
              <br/>{requestData.city}
              <br/>{requestData.postcode}
              </p>
              <strong>Vehicle Details</strong>
              <p> 
              Vehicle Type: {requestData.vehicleType}
              <br/>Engine Size: {requestData.engineSize}
              <br/>Additonal Drivers: {requestData.additionalDrivers}
              <br/>Commercial Purposes: {requestData.commercialPurposes}
              <br/>Used Outside State: {requestData.usedOutsideState}
              <br/>Date Registered: {requestData.dateRegistered}
              <br/>Current Value: £{requestData.currentValue}
              </p>       
              <strong>Quote: £{requestData.quote} </strong>               
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              content="Delete"
              labelPosition='right'
              icon='trash alternate'
              onClick={callMockAPI}
              negative
            />
          </Modal.Actions>
        </Modal>

      </Form>

    </div>
  );



}

export default Delete;
