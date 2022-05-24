import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import Detail from "../Detail/Detail";
import Update from "../Update/Update";
import ListItem from "./ListItem";

const ListComponent = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { addresses, setAddresses } = props;
  const [clickedAddress, setClickedAddress] = useState();

  const onEditClick = (val) => {
    setShowEdit(true);
    setClickedAddress(val);
  };

  const onShowClick = (val) => {
    setShowDetail(true);
    setClickedAddress(val);
  };

  const onDeleteClick = (val) => {
    //id si farkli olani sil filter ile
    const newAddresses = addresses.filter((x) => x.id !== val.id);
    setAddresses(newAddresses);
    setShowEdit(false);
  };

  return (
    <Container className="mt-5 ">
      <Update
        setShowEdit={setShowEdit}
        showEdit={showEdit}
        onDeleteClick={() => onDeleteClick(clickedAddress)}
        address={clickedAddress}
        addresses={addresses}
        setAddresses={setAddresses}
      />
      <Detail
        setShowDetail={setShowDetail}
        showDetail={showDetail}
        address={clickedAddress}
      />

      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Sehir</th>
            <th>Gender</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((x) => (
            <ListItem
              onEditClick={() => onEditClick(x)}
              onShowClick={() => onShowClick(x)}
              onDeleteClick={() => onDeleteClick(x)}
              key={x.id}
              address={x}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListComponent;
