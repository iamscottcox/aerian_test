import { SET_USER_LOCATION, SET_USER_FETCHING } from "./types/user";

export const setUserLocation = location => ({
  type: SET_USER_LOCATION,
  location
});

export const setUserFetching = fetching => ({
  type: SET_USER_FETCHING,
  fetching
});
