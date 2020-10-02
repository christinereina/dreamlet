import * as c from './../actions/ActionTypes';

export const deleteDreamlet = id => ({
  type: c.DELETE_DREAMLET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

