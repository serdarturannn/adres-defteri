import React, { useState } from "react";
import ListComponent from "../../components/ListComponent/ListComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { data } from "../../data/data";
import { searchFilter } from "../../filter";

const HomePage = () => {
  const [addresses, setAddresses] = useState(data);
  const [listShow, setListShow] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div>
      <NavbarComponent setListShow={setListShow} setSearch={setSearch} />
      {listShow == true ? (
        <ListComponent addresses={searchFilter(search, addresses)} />
      ) : (
        <div>Yeni Ekle</div>
      )}
    </div>
  );
};

export default HomePage;
