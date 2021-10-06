import React, { useState } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './Create.css';

function Create() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefix, setPrefix] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [additionalDrivers, setAdditionalDrivers] = useState('');
  const [commercialPurposes, setCommercialPurposes] = useState('');
  const [usedOutsideState, setUsedOutsideState] = useState('');
  const [dateRegistered, setDateRegistered] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  let history = useHistory();

  const callMockAPI = () => {

    const formData = {
      firstName,
      lastName,
      prefix,
      phone,
      addressLine1,
      addressLine2,
      city,
      postcode
    }

    const endpointURL = "https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance";
    axios.post(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(err => console.log(err));
  }

  const prefixOptions = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Other', value: 'Other' },
  ]

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

        <Form.Group >
          <Form.Select
            fluid
            label='Prefix'
            options={prefixOptions}
            placeholder='Prefix'
            onChange={e => setPrefix(e.target.textContent)}
            width={2} />
          <Form.Input fluid label='First name' placeholder='First name'
            onChange={e => setFirstName(e.target.value)}
            width={7} />
          <Form.Input fluid label='Last name' placeholder='Last name'
            onChange={e => setLastName(e.target.value)}
            width={7} />
        </Form.Group>

        <Form.Input fluid label='Phone' placeholder='Phone'
          id='phone'
          onBlur={e => validatePhone(e.target.value)}
          width={8} />

        <Form.Input fluid label='Address Line 1' placeholder='Address Line 1'
          onChange={e => setAddressLine1(e.target.value)}
          width={16} />
        <Form.Input fluid label='Address Line 2' placeholder='Address Line 2'
          onChange={e => setAddressLine2(e.target.value)}
          width={16} />

        <Form.Group >
          <Form.Input fluid label='City' placeholder='City'
            onChange={e => setCity(e.target.value)}
            width={8} />
          <Form.Input fluid label='Postcode' placeholder='Postcode'
            onChange={e => setPostcode(e.target.value)}
            width={8} />
        </Form.Group>

        <Form.Select
          fluid
          label='Vehicle Type'
          options={vehicleOptions}
          placeholder='Vehicle Type'
          onChange={e => setVehicleType(e.target.textContent)}
          width={6} />

        <Form.Select
          fluid
          label='Engine Size'
          options={engineSizeOptions}
          placeholder='Engine Size'
          onChange={e => setEngineSize(e.target.textContent)}
          width={6} />

        <Form.Select
          fluid
          label='Additional Drivers'
          options={additionalDriversOptions}
          placeholder='Additional Drivers'
          onChange={e => setAdditionalDrivers(e.target.textContent)}
          width={6} />

        <Form.Field>
          <Checkbox label='Will the vehicle be used for commerical purposes?' onChange={e => setCommercialPurposes(e.target.checked)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Will the vehicle be used outside the registered state?' onChange={e => setUsedOutsideState(e.target.checked)} />
        </Form.Field>

        <Form.Field fluid width={4}>
          <div class="form-group row">
            <label id="currentValueLabel" for="currentValue" class="col-4 col-form-label required-label">What is the current value of the vehicle?</label>
            <input type="number" id="currentValue" name="currentValue" onChange={e => setCurrentValue(e.target.checked)}
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

        <Button
          type='submit'
          onClick={callMockAPI}
        >Submit</Button>
      </Form>
    </div>
  );
}

export default Create;