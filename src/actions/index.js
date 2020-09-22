export const deleteKombucha = id => ({
  type: 'DELETE_KOMBUCHA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTicket = (ticket) => {
  const { name, brand, price, flavor,quanity, id } = ticket;
  return {
    type: 'ADD_KOMBUCHA',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quanity: quanity,
    id: id,
  }
}