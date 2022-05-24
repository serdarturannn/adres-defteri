import React, { useState } from "react";
import ListComponent from "../../components/ListComponent/ListComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import NewAddress from "../../components/NewAddress/NewAddress";
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
        <ListComponent setAddresses={setAddresses} addresses={searchFilter(search, addresses)} />
      ) : (
        <NewAddress setAddresses={setAddresses} addresses={addresses} setListShow={setListShow}/>
      )}
    </div>
  );
};

export default HomePage;
