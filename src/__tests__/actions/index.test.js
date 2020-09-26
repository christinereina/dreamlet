import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Dreamlet actions', () => {
  it('addDreamlet should create ADD_Dreamlet action', () => {
    expect(actions.addDreamlet({
      title: 'The Keanu',
      description: 'best dream ever!',
      id: 1
    })).toEqual({
        type: c.ADD_DREAMLET,
        title: 'The Keanu',
        description: 'best dream ever!',
        id: 1
    });
  });

  it('deleteDreamlet should create DELETE_Dreamlet action', () => {
    expect(actions.deleteDreamlet(1)).toEqual({
      type: c.DELETE_DREAMLET,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

});