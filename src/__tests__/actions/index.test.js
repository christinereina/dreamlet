import * as actions from './../../actions';

describe('kombucha girl actions', () => {
  it('deleteKombucha should create DELETE_KOMBUCHA action', () => {
    expect(actions.deleteKombucha(1)).toEqual({
      type: 'DELETE_KOMBUCHA',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKombucha should create ADD_KOMBUCHA action', () => {
    expect(actions.addTicket({
      name: 'The Keanu',
      brand: 'Dr. Christine',
      price: '$8.99',
      flavor: 'Honey Peach',
      quanity: 100,
      id: 1
    }));
  });

});