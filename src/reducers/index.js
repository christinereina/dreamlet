import formVisibleReducer from './form-visible-reducer';
import DreamletListReducer from './dreamlet-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterDreamletList: DreamletListReducer
});

export default rootReducer;