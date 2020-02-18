import store from "../store";
import { setUserLocation, setUserFetching } from "../actions/user";
import { GEOLOCATION_UNSUPPORTED } from "../constants/user";
import { FETCH_ERROR } from "../constants";

export const success = () => {};

export const error = () => {};

export const fetchUserLocation = (dispatch = store.dispatch) => {
  if (navigator.geolocation === undefined) {
    dispatch(setUserLocation(GEOLOCATION_UNSUPPORTED));
  } else {
    dispatch(setUserFetching(true));
    navigator.geolocation.getCurrentPosition(
      position => {
        dispatch(setUserLocation(position));
        dispatch(setUserFetching(false));
      },
      () => {
        dispatch(setUserLocation(FETCH_ERROR));
        dispatch(setUserFetching(false));
      }
    );
  }
};
