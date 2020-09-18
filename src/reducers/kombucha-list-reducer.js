export default (state = {}, action) => {
  const { name, brand, price, flavor, quanity, id } = action;
  switch (action.type) {
  case 'ADD_KOMBUCHA':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quanity: quanity,
        id: id
      }
    });
  default:
    return state;
  }
};