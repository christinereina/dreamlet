import kombuchaListReducer from '../../reducers/kombucha-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kombuchaListReducer', () => {

  let action;
  const currentState = {
   1: {name: 'The Keanu',
    brand: 'Dr. Christine',
    price: '$8.99',
    flavor: 'Honey Peach',
    quanity: '100',
    id: 1},
    2: {name: 'The Sam Rockwell',
    brand: 'Dr. Christine',
    price: '$10.99',
    flavor: 'Cucumber Melon',
    quanity: '100',
    id: 2}
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, { type: null })).toEqual({});
  });

test('Should successfully add new kombucha to masterKombuchaList', () => {
  const { name, brand, price, flavor, quanity, id } = currentState;
  action = {
    type: c.ADD_KOMBUCHA,
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

test('Should delete a kombucha', () => {
  action = {
    type: c.DELETE_KOMBUCHA,
    id: 1
  };
  expect(kombuchaListReducer(currentState, action)).toEqual({
    2: {name: 'The Sam Rockwell',
    brand: 'Dr. Christine',
    price: '$10.99',
    flavor: 'Cucumber Melon',
    quanity: '100',
    id: 2}
  });
});
  
});
