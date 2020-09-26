import DreamletListReducer from '../../reducers/Dreamlet-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('DreamletListReducer', () => {

  let action;
  const currentState = {
   1: {
    title: 'The Keanu',
    description: 'best dream ever!',
    id: 1
   },
    2: {
      title: 'The Rockwell',
      description: 'best dream ever!',
      id: 2
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(DreamletListReducer({}, { type: null })).toEqual({});
  });

test('Should successfully add new Dreamlet to masterDreamletList', () => {
  const { title, description, id } = currentState;
  action = {
    type: c.ADD_DREAMLET,
    title: title,
    description: description,
    id: id
  };

  expect(DreamletListReducer({}, action)).toEqual({
    [id] : {
      title: title,
      description: description,
      id: id,
    }
  });
}); 

test('Should delete a Dreamlet', () => {
  action = {
    type: c.DELETE_DREAMLET,
    id: 1
  };
  expect(DreamletListReducer(currentState, action)).toEqual({
    2: {
      title: 'The Rockwell',
      description: 'best dream ever!',
      id: 2
    }
  });
});
  
});
