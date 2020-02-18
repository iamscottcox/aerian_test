import { SET_USER_LOCATION, SET_USER_FETCHING } from "../actions/types/user";

export const initialState = {
  fetching: false,
  location: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return {
        ...state,
        location: action.location
      };
    case SET_USER_FETCHING:
      return {
        ...state,
        fetching: action.fetching
      };
    default:
      return state;
  }
};

export default user;
