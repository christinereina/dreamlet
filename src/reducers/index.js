import formVisibleReducer from './form-visible-reducer';
import dreamletListReducer from './dreamlet-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterDreamletList: dreamletListReducer,
  firestore: firestoreReducer
});

export default rootReducer;