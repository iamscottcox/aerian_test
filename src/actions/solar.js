import { SET_SOLAR_DATA, SET_SOLAR_FETCHING } from "./types/solar";

export const setSolarData = data => ({
  type: SET_SOLAR_DATA,
  data
});

export const setSolarFetching = fetching => ({
  type: SET_SOLAR_FETCHING,
  fetching
});
