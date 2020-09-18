import kombuchaListReducer from '../../reducers/kombucha-list-reducer';

describe('kombuchaListReducer', () => {

  let action;
  const kombuchaData = {
    name: 'The Keanu',
    brand: 'Dr. Christine',
    price: '$8.99',
    flavor: 'Honey Peach',
    quanity: '100',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, { type: null })).toEqual({});
  });

test('Should successfully add new kombucha to masterKombuchaList', () => {
  const { name, brand, price, flavor, quanity, id } = kombuchaData;
  action = {
    type: 'ADD_KOMBUCHA',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quanity: quanity,
    id: id
  };

  expect(kombuchaListReducer({}, action)).toEqual({
    [id] : {
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quanity: quanity,
      id: id,
    }
  });
});
});
