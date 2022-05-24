export const searchFilter = (search, addresses) => {
  return addresses.filter(
    (x) =>
      x.name.toLowerCase().includes(search) ||
      x.surname.toLowerCase().includes(search) ||
      x.phoneNumber.toLowerCase().includes(search) ||
      x.city.toLowerCase().includes(search)
  );
};
