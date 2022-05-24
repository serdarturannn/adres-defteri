import { Modal } from "react-bootstrap";
import React from "react";

const Detail = (props) => {
  const { setShowDetail, showDetail, address } = props;

  return (
    <Modal show={showDetail} onHide={() => setShowDetail(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {address?.name} {address?.surname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Gender: {address?.gender}</p>
        <p>Email: {address?.email}</p>
        <p>Phone: {address?.phoneNumber}</p>
        <p>Home Phone: {address?.homePhone}</p>
        <p>Work Phone: {address?.workPhone}</p>
        <p>City: {address?.city}</p>
        <p>Address: {address?.address}</p>
        <p>Work Address: {address?.workAddress}</p>
        <p>Instagram: {address?.instagram}</p>
        <p>Facebook: {address?.facebook}</p>
        <p>SnapChat: {address?.snapChat}</p>
        <p>BirthDay: {address?.birthDay}</p>
      </Modal.Body>
    </Modal>
  );
};

export default Detail;
