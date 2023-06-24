import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

const defaultState = {
  people: data,
  isLoading: false,
};

function reducer(state, action) {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action._id);
    return { ...state, people: newPeople };
  } else if (action.type === RESET_LIST) {
    return { ...defaultState };
  }
  throw new Error(`No matching "${action.type}" - action type`);
}

export default reducer;
