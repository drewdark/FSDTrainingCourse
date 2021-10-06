import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


function Update() {
  const [id, setID] = useState('');
  const [phone, setPhone] = useState('');

  const callMockAPI = () => {

    const formData = {
      phone
    }

    const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${id}`;
    axios.put(endpointURL, formData)
      .then(alert('Phone number successfully updated.'))
      .catch(err => console.log(err));
  }

  return (
    <div className="Update">

      <br/>

      <Form>
          <Form.Input
            fluid
            id='driverID'
            label='Driver ID'
            placeholder='Driver ID'
            onChange={e => setID(e.target.value)}
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
