import React, { useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';


function Update() {
  const [id, setID] = useState('');
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const [errorNoRecord, setErrorNoRecord] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [disabledPhone, setDisabledPhone] = useState(true);
  const phoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

  const disableUpdateButtonAndPhoneTextbox = (val) => {
    setDisabledButton(true);
    setDisabledPhone(true);
  }

  const updateRecord = () => {
    const endpointURL = `http://localhost:8080/requests?id=${id}&phone=${phone}`;
    axios.put(endpointURL)
      .then(handleSuccessfulUpdate)
      .catch(err => console.log(err));
  }

  const handleSuccessfulUpdate = () => {
    document.getElementById("driverIDUpdate").value = '';
    document.getElementById("phone").value = '';
    setDisabledPhone(true);
    setDisabledButton(true);
    setOpen(true);
  }

  const handleChangeID = (driverID) => {
    setID(driverID);
    const endpointURL = `http://localhost:8080/requests/${driverID}`;
    axios.get(endpointURL)
      .then(response => handleResponseGet(response.data))
      .catch(err => console.log(err));
  }

  const handleResponseGet = (data) => {
    if (data && !Array.isArray(data)) {
      document.getElementById("phone").value = data.phone;
      setDisabledPhone(false);
      setDisabledButton(false);
      setErrorNoRecord(false);
      setErrorPhone(false);
    }
    else {
      document.getElementById("driverIDUpdate").value = '';
      document.getElementById("phone").value = '';
      setDisabledPhone(true);
      setDisabledButton(true);
      setErrorNoRecord(true);
      setErrorPhone(false);
    }
  }

  const validatePhone = (phone) => {
    if (!phone.trim().match(phoneRegex)){ 
      setErrorPhone(true);
      setDisabledButton(true);
    }
    else {
      setPhone(phone);
      setErrorPhone(false);
      setDisabledButton(false);
    }

    
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
          onFocus={disableUpdateButtonAndPhoneTextbox}
          width={4}
        />
        <Form.Input
          fluid
          disabled={disabledPhone}
          id='phone'
          label='Phone Number'
          placeholder='Phone Number'
          onChange={e => validatePhone(e.target.value)}
          width={4}
        />
        <Button
          disabled={disabledButton}
          onClick={updateRecord}
        >Update</Button>


      </Form>

      {errorNoRecord && <p className='errors'>No record found with Driver ID {id}.</p>}
      {errorPhone && <p className='errors'>Phone number must be in a valid format.</p>}



      <Modal
        size='tiny'
        open={open}
      >
        <Modal.Header>Phone number updated.</Modal.Header>
        <Modal.Content>
          <p>Phone number has been successfully updated to {phone}.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      
    </div>
  );
}


export default Update;
