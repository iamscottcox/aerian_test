import { SET_SOLAR_DATA, SET_SOLAR_FETCHING } from "../actions/types/solar";

export const initialState = {
  fetching: false,
  data: null
};

export const solar = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOLAR_DATA:
      return {
        ...state,
        data: action.data
      };
    case SET_SOLAR_FETCHING:
      return {
        ...state,
        fetching: action.fetching
      };
    default:
      return state;
  }
};

export default solar;
