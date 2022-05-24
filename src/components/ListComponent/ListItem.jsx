import React from "react";
import { Stack, Button } from "react-bootstrap";

const ListItem = (props) => {
  const { address, onEditClick, onShowClick, onDeleteClick } = props;
  return (
    <tr>
      <td>{address.name}</td>
      <td>{address.surname}</td>
      <td>{address.phoneNumber}</td>
      <td>{new Date(address.birthDay).toLocaleDateString()}</td>
      <td>{address.city}</td>
      <td>{address.gender}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="horizontal" gap={3}>
            <Button onClick={onShowClick} className="m-2" variant="primary">
              Goster
            </Button>
            <Button onClick={onEditClick} className="m-2" variant="success">
              Duzenle
            </Button>
            <Button onClick={onDeleteClick} className="m-2" variant="danger">
              Sil
            </Button>
          </Stack>
        </div>
      </td>
    </tr>
  );
};

export default ListItem;
