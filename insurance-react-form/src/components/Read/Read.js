import React, { useState } from 'react';
import { Button, Form, Table } from 'semantic-ui-react';
import axios from 'axios';

function Read() {

  const [tableData, setTableData] = useState([]);
  const [id, setID] = useState('');

  const callMockAPI = () => {

    const endpointURL = `https://615d6dee12571a001720760b.mockapi.io/car-insurance/${id}`;
    axios.get(endpointURL)
      .then(response => setTableData(response.data))
      .then(document.getElementById("table").hidden = false)
      .catch(err => console.log(err));
  }

  return (
    <div className="Read">

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
          <Button
            type='submit'
            onClick={callMockAPI}
          >View Details</Button>
          

      </Form>


      <Table id='table' celled hidden>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Address Line 1</Table.HeaderCell>
            <Table.HeaderCell>Address Line 2</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Postode</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{tableData.prefix}</Table.Cell>
            <Table.Cell>{tableData.firstname}</Table.Cell>
            <Table.Cell>{tableData.lastname}</Table.Cell>
            <Table.Cell>{tableData.phone}</Table.Cell>
            <Table.Cell>{tableData.addressLine1}</Table.Cell>
            <Table.Cell>{tableData.addressLine2}</Table.Cell>
            <Table.Cell>{tableData.city}</Table.Cell>
            <Table.Cell>{tableData.postcode}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </div>
  );



}

export default Read;
