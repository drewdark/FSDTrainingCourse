import React, { useState } from 'react';
import { Button, Form, Checkbox, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './Create.css';

function Create() {

  const [prefix, setPrefix] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [additionalDrivers, setAdditionalDrivers] = useState('');
  const [commercialPurposes, setCommercialPurposes] = useState(false);
  const [usedOutsideState, setUsedOutsideState] = useState(false);
  const [dateRegistered, setDateRegistered] = useState(new Date());
  const [currentValue, setCurrentValue] = useState('');
  const [comments, setComments] = useState('');
  let history = useHistory();

  const callMockAPI = () => {

    const formData = {
      prefix,
      firstname,
      lastname,
      phone,
      addressLine1,
      addressLine2,
      city,
      postcode,
      vehicleType,
      engineSize,
      additionalDrivers,
      commercialPurposes,
      usedOutsideState,
      dateRegistered,
      currentValue,
      comments
    }

    const endpointURL = "https://615d6dee12571a001720760b.mockapi.io/car-insurance";
    axios.post(endpointURL, formData)
      .then(() => history.push("/"))
      .catch(err => console.log(err));
  }

  const vehicleOptions = [
    { text: 'Cabriolet', value: 'Cabriolet' },
    { text: 'Coupe', value: 'Coupe' },
    { text: 'Estate', value: 'Estate' },
    { text: 'Hatchback', value: 'Hatchback' },
    { text: 'Other', value: 'Other' }
  ]

  const engineSizeOptions = [
    { text: '1000', value: '1000' },
    { text: '1600', value: '1600' },
    { text: '2000', value: '2000' },
    { text: '2500', value: '2500' },
    { text: '3000', value: '3000' },
    { text: 'Other', value: 'Other' }
  ]

  const additionalDriversOptions = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' }
  ]

  function validatePhone(phoneNo) {
    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneNo.match(regex)) {
      setPhone(phoneNo)
      return true;
    }
    else {
      alert("Please enter telephone number in correct format");
      document.getElementById("phone").value = "";
      setPhone("");
      return false;
    }
  }

  return (
    <div>

      <div>

        <h2>Tell us about yourself and your vehicle </h2>
        <b>Note </b>
        <p>It is essential that you answer all questions honestly and to the best of your knowledge. Failure to be honest could result in any policy that you take being cancelled. We also reserve the right to reject any claims associated with the policies where the questions were not answered honestly.</p>
        <p>In order to help you answer the questions honestly we have provided help text where possible but we also offer a free phone number where our agents will be glad to assist you in filling out the form. If you have a question call us on 0888 888 8888 for more information.</p>
      </div>

      <hr />

      <Form >
        <h3> Customer Details </h3>
        <Form.Group >
          <Form.Input
            fluid
            id='prefix'
            label='Prefix'
            placeholder='Prefix'
            onChange={e => setPrefix(e.target.value)}
            width={2} />
          <Form.Input
            fluid
            id='firstname'
            label='First name'
            placeholder='First name'
            onChange={e => setFirstname(e.target.value)}
            width={7} />
          <Form.Input
            fluid
            id='lastname'
            label='Last name'
            placeholder='Last name'
            onChange={e => setLastname(e.target.value)}
            width={7} />
        </Form.Group>

        <Form.Input
          fluid
          id='phone'
          label='Phone'
          placeholder='Phone'
          onBlur={e => validatePhone(e.target.value)}
          width={8} />

        <Form.Input
          fluid
          id='addressLine1'
          label='Address Line 1'
          placeholder='Address Line 1'
          onChange={e => setAddressLine1(e.target.value)}
          width={16} />
        <Form.Input
          fluid
          id='addressLine2'
          label='Address Line 2'
          placeholder='Address Line 2'
          onChange={e => setAddressLine2(e.target.value)}
          width={16} />

        <Form.Group >
          <Form.Input
            fluid
            id='city'
            label='City'
            placeholder='City'
            onChange={e => setCity(e.target.value)}
            width={8} />
          <Form.Input
            fluid
            id='postcode'
            label='Postcode'
            placeholder='Postcode'
            onChange={e => setPostcode(e.target.value)}
            width={8} />
        </Form.Group>

        <h3> Vehicle Details </h3>
        <Form.Select
          fluid
          id='vehicleType'
          label='Vehicle Type'
          options={vehicleOptions}
          placeholder='Vehicle Type'
          onChange={e => setVehicleType(e.target.textContent)}
          width={6} />

        <Form.Select
          fluid
          id='engineSize'
          label='Engine Size'
          options={engineSizeOptions}
          placeholder='Engine Size'
          onChange={e => setEngineSize(e.target.textContent)}
          width={6} />

        <Form.Select
          fluid
          id='additionalDrivers'
          label='Additional Drivers'
          options={additionalDriversOptions}
          placeholder='Additional Drivers'
          onChange={e => setAdditionalDrivers(e.target.textContent)}
          width={6} />

        <Form.Field>
          <Checkbox
            id='commercialPurposes'
            label='Will the vehicle be used for commerical purposes?'
            onChange={e => setCommercialPurposes(e.target.checked)} />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id='usedOutsideState'
            label='Will the vehicle be used outside the registered state?'
            onChange={e => setUsedOutsideState(e.target.checked)} />
        </Form.Field>

        <Form.Field fluid width={4}>
          <div class="form-group row">
            <label id="currentValueLabel" for="currentValue" class="col-4 col-form-label required-label">What is the current value of the vehicle?</label>
            <input type="number" id="currentValue" name="currentValue" onChange={e => setCurrentValue(e.target.value)}
              min="00" max="50000" />
          </div>
        </Form.Field>

        <Form.Field fluid width={4}>
          <div class="form-group row">
            <label id="dateRegisteredLabel" for="dateRegistered" class="col-4 col-form-label">Date vehicle was first registered</label>
            <div class="col-8">
              <input id="dateRegistered" name="dateRegistered" type="date" required="required" class="form-control" onchange={e => setDateRegistered(e.target.value)} />
            </div>
          </div>
        </Form.Field>

        <Form.Field fluid width={8}>
        <TextArea
            id='comments' 
            label='Comments'
            placeholder='If you have any additional information, please provide it here.'
            onChange={e => setComments(e.target.value)} />
        </Form.Field>

        <Button
          type='submit'
          onClick={callMockAPI}
        >Submit</Button>
      </Form>

    </div>
  );
}

export default Create;