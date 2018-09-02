// SIMPLE REDUCER
import { UI_ACTIONS } from "../constants/action_types";

let list = localStorage.getItem("listOfTunes")
  ? JSON.parse(localStorage.getItem("listOfTunes"))
  : [];
export default (state = { listOfTunes: list }, action) => {
  switch (action.type) {
    case UI_ACTIONS.SAVE_TUNE:
      return { ...state, listOfTunes: state.listOfTunes.concat(action.data) };
    case UI_ACTIONS.PLAY_TUNE:
      return state;
    default:
      return state;
  }
};
