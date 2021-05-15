import * as types from "../types/weatherTypes";

const initialState = {
  city: {},
  lists: [],
  degree: "",
  isFetching: false,
};

export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCHING_STARTS:
      return {
        ...state,
        isFetching: payload,
      };

    case types.FETCHING_STOPS:
      return {
        ...state,
        isFetching: payload,
      };

    case types.GET_WEATHER_DETAILS:
      return {
        ...state,
        city: payload.city,
        lists: payload.lists,
        degree: payload.degree,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default weatherReducer;
