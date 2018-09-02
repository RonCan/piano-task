import { UI_ACTIONS } from "../constants/action_types";
import keySounds from "../constants/keySounds";

export function saveTune(name, tune) {
  return (dispatch, getState) => {
    localStorage.setItem(
      "listOfTunes",
      JSON.stringify(
        getState().ui.listOfTunes.concat({ name: name, tune: tune })
      )
    );
    dispatch({ type: UI_ACTIONS.SAVE_TUNE, data: { name: name, tune: tune } });
  };
}

export function playTune(tune) {
  let index = 1,
    audio = new Audio(keySounds[tune[0]]);
  audio.play();

  audio.onended = () => {
    if (index < tune.length) {
      audio.src = keySounds[tune[index]];
      audio.play();
      index++;
    }
  };
  return dispatch => {
    dispatch({ type: UI_ACTIONS.PLAY_TUNE, data: {} });
  };
}
