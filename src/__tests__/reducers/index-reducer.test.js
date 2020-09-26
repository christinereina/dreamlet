import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import DreamletListReducer from '../../reducers/Dreamlet-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterDreamletList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of DreamletListReducer matches root reducer', () => {
    expect(store.getState().masterDreamletList).toEqual(DreamletListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of DreamletListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_DREAMLET,
      title: 'The Keanu',
      description: 'best dream ever!',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterDreamletList).toEqual(DreamletListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});