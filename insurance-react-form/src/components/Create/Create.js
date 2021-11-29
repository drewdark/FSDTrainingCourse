import React from 'react';
import { Button, Form, Checkbox, TextArea, Grid, Modal, Header } from 'semantic-ui-react';
import useForm from './useForm.js';
import validate from './validateForm.js'
import { useHistory } from 'react-router';

function Create() {

  let history = useHistory();
  const { handleChange, values, handleSubmit, errors, openError, setOpenError, openSuccess, setOpenSuccess, quote } = useForm(validate);

  const vehicleOptions = [
    { text: '-- None --', value: '-- None --' },
    { text: 'Cabriolet', value: 'Cabriolet' },
    { text: 'Coupe', value: 'Coupe' },
    { text: 'Estate', value: 'Estate' },
    { text: 'Hatchback', value: 'Hatchback' },
    { text: 'Other', value: 'Other' }
  ]

  const engineSizeOptions = [
    { text: '-- None --', value: '-- None --' },
    { text: '1000', value: '1000' },
    { text: '1600', value: '1600' },
    { text: '2000', value: '2000' },
    { text: '2500', value: '2500' },
    { text: '3000', value: '3000' },
    { text: 'Other', value: 'Other' }
  ]

  const additionalDriversOptions = [
    { text: '-- None --', value: '-- None --' },
    { text: '0', value: '0' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' }
  ]

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
            name='prefix'
            label='Prefix'
            placeholder='Prefix'
            width={2}
            value={values.prefix}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            id='firstname'
            name='firstname'
            label='First name'
            placeholder='First name'
            width={7}
            value={values.firstname}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            id='lastname'
            name='lastname'
            label='Last name'
            placeholder='Last name'
            width={7}
            value={values.lastname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Input
          fluid
          id='phone'
          name='phone'
          label='Phone'
          placeholder='Phone'
          width={8}
          value={values.phone}
          onChange={handleChange} />

        <Form.Input
          fluid
          id='addressLine1'
          name='addressLine1'
          label='Address Line 1'
          placeholder='Address Line 1'
          width={16}
          value={values.addressLine1}
          onChange={handleChange}
        />
        <Form.Input
          fluid
          id='addressLine2'
          name='addressLine2'
          label='Address Line 2'
          placeholder='Address Line 2'
          width={16}
          value={values.addressLine2}
          onChange={handleChange} />

        <Form.Group >
          <Form.Input
            fluid
            id='city'
            name='city'
            label='City'
            placeholder='City'
            width={8}
            value={values.city}
            onChange={handleChange} />
          <Form.Input
            fluid
            id='postcode'
            name='postcode'
            label='Postcode'
            placeholder='Postcode'
            width={8}
            value={values.postcode}
            onChange={handleChange} />
        </Form.Group>

        <h3> Vehicle Details </h3>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>

              <Form.Field>
                <label>Vehicle Type</label>
                <select fluid
                  id='vehicleType'
                  name='vehicleType'
                  value={values.vehicleType}
                  onChange={handleChange}>
                  {vehicleOptions.map((option) => (
                    <option value={option.value}>{option.text}</option>
                  ))}
                </select>
              </Form.Field>

              <Form.Field>
                <label>Engine Size</label>
                <select fluid
                  id='engineSize'
                  name='engineSize'
                  value={values.engineSize}
                  onChange={handleChange}>
                  {engineSizeOptions.map((option) => (
                    <option value={option.value}>{option.text}</option>
                  ))}
                </select>
              </Form.Field>

              <Form.Field>
                <label>Additional Drivers</label>
                <select fluid
                  id='additionalDrivers'
                  name='additionalDrivers'
                  value={values.additionalDrivers}
                  onChange={handleChange}>
                  {additionalDriversOptions.map((option) => (
                    <option value={option.value}>{option.text}</option>
                  ))}
                </select>
              </Form.Field>

            </Grid.Column>
            <Grid.Column>
              <Form.Field fluid>
                <label>What is the current value (£) of the vehicle?</label>
                <input type="number" id="currentValue" name="currentValue"
                  min="00" max="50000"
                  value={values.currentValue}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Date vehicle was first registered</label>
                <div class="col-8">
                  <input id="dateRegistered" name="dateRegistered" type="date" required="required" class="form-control"
                    value={values.dateRegistered}
                    onChange={handleChange} />
                </div>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Form.Field>
          <Checkbox
            id='commercialPurposes'
            name='commercialPurposes'
            label='Will the vehicle be used for commerical purposes?'
            value={values.commercialPurposes}
            onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id='usedOutsideState'
            name='usedOutsideState'
            label='Will the vehicle be used outside the registered state?'
            value={values.usedOutsideState}
            onChange={handleChange} />
        </Form.Field>

        <Form.Field fluid>
          <label>Additional Information</label>
          <TextArea
            id='comments'
            name='comments'
            label='Comments'
            placeholder='If you have any additional information, please provide it here.'
            value={values.comments}
            onChange={handleChange} />
        </Form.Field>

        <Button
          type='submit'
          onClick={handleSubmit}
        >Submit</Button>
      </Form>

      <Modal
        onClose={() => setOpenError(false)}
        onOpen={() => setOpenError(true)}
        open={openError}
      >
        <Modal.Header>Validation Error</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Please correct the following issues before submitting:</Header>
            <div className='errors'>
              {errors.prefix && <p>{errors.prefix}</p>}
              {errors.firstname && <p>{errors.firstname}</p>}
              {errors.lastname && <p>{errors.lastname}</p>}
              {errors.phone && <p>{errors.phone}</p>}
              {errors.addressLine1 && <p>{errors.addressLine1}</p>}
              {errors.city && <p>{errors.city}</p>}
              {errors.postcode && <p>{errors.postcode}</p>}
              {errors.vehicleType && <p>{errors.vehicleType}</p>}
              {errors.engineSize && <p>{errors.engineSize}</p>}
              {errors.additionalDrivers && <p>{errors.additionalDrivers}</p>}
              {errors.currentValue && <p>{errors.currentValue}</p>}
              {errors.dateRegistered && <p>{errors.dateRegistered}</p>}
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpenError(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal
          onClose={() => setOpenSuccess(false)}
          onOpen={() => setOpenSuccess(true)}
          open={openSuccess}
        >
          <Modal.Header>Record Successfully Added</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <p>Thank you for using the Allstate NI Car Insurance Portal!</p>
              <p>Your final quote is £{quote}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Thanks!"
              labelPosition='right'
              icon='thumbs up outline'
              onClick={() => history.push("/")}
              positive
            />
          </Modal.Actions>
        </Modal>


    </div>
  );
}

export default Create;