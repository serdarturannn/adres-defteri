import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const NewAddress = (props) => {
  const { setAddresses, addresses, setListShow } = props;

  const [newAdddress, setNewAdddress] = useState({
    id: Math.random(),
    name: "",
    surname: "",
    gender: "",
    email: "",
    phoneNumber: "",
    homePhone: "",
    workPhone: "",
    city: "",
    address: "",
    workAddress: "",
    instagram: "",
    facebook: "",
    snapChat: "",
    birthDay: "",
  });

  const onChangeInput = (e) => {
    setNewAdddress((newAdddress) => {
      return { ...newAdddress, [e.target.name]: e.target.value };
    });
  };

  const onSaveClick = () => {
    if (
      newAdddress.name !== "" &&
      newAdddress.surname !== "" &&
      newAdddress.email !== "" &&
      newAdddress.phoneNumber !== "" &&
      newAdddress.gender !== ""
    ) {
      setAddresses([...addresses, newAdddress]);
      setListShow(true);
      alert("basariyla kaydedildi!");
    } else {
      alert("bos alan birakilamaz!");
    }
  };

  return (
    <Container className="mt-5  bg-light">
      <Form>
        <Form.Group className="mb-3 ">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="name"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="surname"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" onChange={(e) => onChangeInput(e)}>
            <option>gender..</option>
            <option value="erkek">Erkek</option>
            <option value="kadin">Kadin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="email"
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="phoneNumber"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Home Phone</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="homePhone"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Work Phone</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="workPhone"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="city"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="address"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Work Address</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="workAddress"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Instagram</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="instagram"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Facebook</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="facebook"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>SnapChat</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="snapChat"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>BirthDay</Form.Label>
          <Form.Control
            onChange={(e) => onChangeInput(e)}
            name="birthDay"
            type="date"
          />
        </Form.Group>

        <Button onClick={onSaveClick} variant="primary">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default NewAddress;
