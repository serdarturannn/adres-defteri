import React from 'react'
import { Container, Table } from 'react-bootstrap';
import ListItem from './ListItem';

const ListComponent = (props) => {

    const { addresses } = props;


  return (
    <Container className="mt-5 ">
    <Table className="text-center" striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Birthday</th>
          <th>Sehir</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
      {
          addresses.map((x)=><ListItem address={x}/>)
      }
      </tbody>
    </Table>
  </Container>
  )
}

export default ListComponent