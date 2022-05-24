import React from "react";
import { Stack, Button } from "react-bootstrap";

const ListItem = (props) => {
  const { address, onEditClick, onShowClick } = props;
  return (
    <tr>
      <td>{address.name}</td>
      <td>{address.surname}</td>
      <td>{address.phoneNumber}</td>
      <td>{new Date(address.birthDay).toLocaleDateString()}</td>
      <td>{address.city}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="horizontal" gap={3}>
            <Button className="m-2" variant="primary">
              Goster
            </Button>
            <Button className="m-2" variant="success">
              Duzenle
            </Button>
          </Stack>
        </div>
      </td>
    </tr>
  );
};

export default ListItem;
