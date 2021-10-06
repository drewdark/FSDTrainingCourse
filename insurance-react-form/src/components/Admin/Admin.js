import React from 'react';
import { Form } from 'semantic-ui-react';
import Read from '../Read/Read';
import Update from '../Update/Update'
import Delete from '../Delete/Delete';


function Admin() {

  const operations = [
    { text: '-- None --', value: '' },
    { text: 'View details of a driver', value: 'read' },
    { text: 'Update telephone number of a driver', value: 'update' },
    { text: 'Delete details of a driver', value: 'delete' },
  ]

  function displayComponent(component) {
    switch (component) {
      case 'read':
        document.getElementById("read").hidden = false;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = true;
        break;
      case 'update':
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = false;
        document.getElementById("delete").hidden = true;
        break;
      case 'delete':
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = false;
        break;
      default:
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = true;
    }
  }

  return (
    <div className="Admin">

      <div>
        <h2>Administrator Panel </h2>
        <b>Note </b>
        <p>To use the administrator panel, please select an operation from the below dropdown box. The corresponding form will appear for you to complete.</p>
      </div>

      <hr />

      <div>
        <Form>
          <Form.Field>
            <label>Which operation would you like to perform?</label>
            <select onChange={e => displayComponent(e.target.value)}>
              {operations.map((option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
          </Form.Field>
        </Form>
      </div>

      

      <div id='read' hidden>
        <Read />
      </div>
      <div id='update' hidden>
        <Update />
      </div>
      <div id='delete' hidden>
        <Delete />
      </div>



    </div>
  )
}


export default Admin;
