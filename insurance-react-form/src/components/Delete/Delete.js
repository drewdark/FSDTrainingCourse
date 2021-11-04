import React, { useState } from 'react';
import { Button, Form, Modal, Header } from 'semantic-ui-react';
import axios from 'axios';

function Delete() {

  const [id, setID] = useState('');
  const [requestData, setRequestData] = useState([]);
  const [errorNoRecord, setErrorNoRecord] = useState(false);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  
  const disableDeleteButton = () => {
    setDisabled(true);
  }

  const deleteRecord = () => {
    const endpointURL = `http://localhost:8080/requests/${id}`;
    axios.delete(endpointURL)
      .then(handleResponseDelete)
      .catch(err => console.log(err));
  }

  const handleResponseDelete = () => {
    setOpen(false);
    document.getElementById("driverIDDelete").value = '';
    setDisabled(true);
  }

  const handleChangeID = (driverID) => {
    setID(driverID);
    const endpointURL = `http://localhost:8080/requests/${driverID}`;
    axios.get(endpointURL)
      .then(response => handleResponseGet(response.data, driverID))
      .catch(err => console.log(err));
  }

  const handleResponseGet = (data, driverID) =>{
    if(data && !Array.isArray(data))
    {
      setRequestData(data);
      setDisabled(false);
      setErrorNoRecord(false);
    }
    else
    {
      document.getElementById("driverIDDelete").value = '';
      setDisabled(true);
      setErrorNoRecord(true);
    }
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
          onFocus={disableDeleteButton}
          width={4}
        />

        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button id='deleteButton' disabled={disabled}>Delete</Button>}
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
              onClick={deleteRecord}
              negative
            />
          </Modal.Actions>
        </Modal>

      </Form>

      {errorNoRecord && <p className='errors'>No record found with Driver ID {id}</p>}
      
    </div>
  );



}

export default Delete;
