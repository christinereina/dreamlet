import * as c from './../actions/ActionTypes';

export const deleteDreamlet = id => ({
  type: c.DELETE_DREAMLET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addDreamlet = (dreamlet) => {
  const { title, description, id } = dreamlet;
  return {
    type: c.ADD_DREAMLET,
    title: title,
    description: description,
    id: id,
  }
}