import * as React from 'react';
import './style.css';
import { Form, Button, Container } from 'react-bootstrap';
import { nameLookups } from './nameLookup';

export default function App() {
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  return (
    <Container>
      <h1>Anna's Silly Name Generator</h1>
      <Form onSubmit={() => alert(firstName)}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="middleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <h2>Name</h2>
        <div style={{ fontSize: '20px' }}>
          {
            [firstName, middleName, lastName]
              .map(
                (name, i) =>
                  nameLookups[i][name?.toUpperCase()?.substring(0, 1)] ?? ''
              )
              .filter((x) => !!x)
              .join(' ')
            // (nameLookups[0][firstName?.toUpperCase()?.substring(0, 1)] ?? '') +
            //   ' ' +
            //   (nameLookups[1][middleName?.toUpperCase()?.substring(0, 1)] ?? '') +
            //   ' ' +
            //   (nameLookups[2][lastName?.toUpperCase()?.substring(0, 1)] ?? '')
          }
        </div>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </Container>
  );
}
