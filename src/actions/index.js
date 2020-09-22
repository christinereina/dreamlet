import * as c from './../actions/ActionTypes';

export const deleteKombucha = id => ({
  type: c.DELETE_KOMBUCHA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { name, brand, price, flavor, quanity, id } = ticket;
  return {
    type: c.ADD_KOMBUCHA,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quanity: quanity,
    id: id,
  }
}