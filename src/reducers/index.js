import formVisibleReducer from './form-visible-reducer';
import DreamletListReducer from './dreamlet-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterDreamletList: DreamletListReducer,
  firestore: firestoreReducer
});

export default rootReducer;