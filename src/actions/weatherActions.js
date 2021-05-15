import * as types from "../types/weatherTypes";
import { GET_WEATHER_DETAILS_URL } from "../urls/weatherURL";

export const getWeatherDetails = (unit) => async (dispatch) => {
  dispatch({
    type: types.FETCHING_STARTS,
    payload: true,
  });
  fetch(`${GET_WEATHER_DETAILS_URL}&units=${unit}`)
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: types.GET_WEATHER_DETAILS,
        payload: {
          city: response.city,
          lists: response.list,
          days: response.list,
          degree: unit,
        },
      });
    })
    .catch(() => {
      alert("Something Went Wrong!");
      dispatch({
        type: types.FETCHING_STOPS,
        payload: false,
      });
    });
};
