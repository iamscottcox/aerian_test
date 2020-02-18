import store from "../store";

import { setSolarData, setSolarFetching } from "../actions/solar";
import { getUserLocation } from "../getters/user";
import { FETCH_ERROR } from "../constants";

export const fetchUserSunriseAndSunset = async (
  state = store.getState(),
  dispatch = store.dispatch
) => {
  const userLocation = getUserLocation(state);

  if (!userLocation) {
    return;
  }

  const {
    coords: { latitude, longitude }
  } = userLocation;

  const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

  try {
    dispatch(setSolarFetching(true));
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setSolarData(json.results));
    dispatch(setSolarFetching(false));
  } catch (error) {
    dispatch(setSolarData(FETCH_ERROR));
    dispatch(setSolarFetching(false));
  }
};
