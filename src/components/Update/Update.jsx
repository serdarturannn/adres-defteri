import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Update = (props) => {
  const {
    showEdit,
    setShowEdit,
    addresses,
    setAddresses,
    address,
    onDeleteClick,
  } = props;

  const [updatedAddress, setUpdatedAddress] = useState({});

  useEffect(() => {
    setUpdatedAddress({ ...address });
  }, [address]);

  const onChangeInput = (e) => {
    setUpdatedAddress((updatedAddress) => {
      return { ...updatedAddress, [e.target.name]: e.target.value };
    });
  };

  const onSaveClick = () => {
    if (
      updatedAddress.name !== "" &&
      updatedAddress.surname !== "" &&
      updatedAddress.email !== "" &&
      updatedAddress.phoneNumber !== "" &&
      updatedAddress.gender !== ""
    ) {
      let newAddresses = addresses.map((x) => {
        if (x.id == updatedAddress.id) {
          const newAddress = { ...updatedAddress };
          return newAddress;
        }
        return x;
      });

      setAddresses(newAddresses);
      setShowEdit(false);
      alert("basariyla kaydedildi!");
    } else {
      alert("bos alan birakilamaz!");
    }
  };

  return (
    <Modal show={showEdit} onHide={() => setShowEdit(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {address?.name} {address?.surname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => onChangeInput(e)}
              name="name"
              value={updatedAddress.name || ""}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              onChange={(e) => onChangeInput(e)}
              value={updatedAddress.surname || ""}
              name="surname"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              name="gender"
              value={updatedAddress.gender || ""}
              onChange={(e) => onChangeInput(e)}
            >
              <option>gender..</option>
              <option value="erkek">Erkek</option>
              <option value="kadin">Kadin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={updatedAddress.email || ""}
              onChange={(e) => onChangeInput(e)}
              name="email"
              type="email"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={updatedAddress.phoneNumber || ""}
              onChange={(e) => onChangeInput(e)}
              name="phoneNumber"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Home Phone</Form.Label>
            <Form.Control
              value={updatedAddress.homePhone || ""}
              onChange={(e) => onChangeInput(e)}
              name="homePhone"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Work Phone</Form.Label>
            <Form.Control
              value={updatedAddress.workPhone || ""}
              onChange={(e) => onChangeInput(e)}
              name="workPhone"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={updatedAddress.city || ""}
              onChange={(e) => onChangeInput(e)}
              name="city"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={updatedAddress.address || ""}
              onChange={(e) => onChangeInput(e)}
              name="address"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Work Address</Form.Label>
            <Form.Control
              value={updatedAddress.workAddress || ""}
              onChange={(e) => onChangeInput(e)}
              name="workAddress"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              value={updatedAddress.instagram || ""}
              onChange={(e) => onChangeInput(e)}
              name="instagram"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              value={updatedAddress.facebook || ""}
              onChange={(e) => onChangeInput(e)}
              name="facebook"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>SnapChat</Form.Label>
            <Form.Control
              value={updatedAddress.snapChat || ""}
              onChange={(e) => onChangeInput(e)}
              name="snapChat"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>BirthDay</Form.Label>
            <Form.Control
              value={updatedAddress.birthDay || ""}
              onChange={(e) => onChangeInput(e)}
              name="birthDay"
              type="date"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onDeleteClick}>
          Delete
        </Button>
        <Button variant="primary" onClick={onSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Update;
