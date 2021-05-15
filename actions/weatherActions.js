import { toast } from "react-toastify";
import * as types from "../types/weatherTypes";
import { GET_WEATHER_DETAILS_URL } from "../urls/weatherURL";

export const getWeatherDetails = (unit) => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCHING_STARTS,
      payload: true,
    });
    const response = await fetch(`${GET_WEATHER_DETAILS_URL}&units=${unit}`);
    const data = await response.json();
    if (data.list && data.list.length) {
      dispatch({
        type: types.GET_WEATHER_DETAILS,
        payload: {
          city: data.city,
          lists: data.list,
          degree: unit,
        },
      });
    } else {
      const { message, cod } = data;
      if (cod === 401) toast.info("Invalid Key");
      else if (message) toast.info(message);
      else toast.info("Something Went Wrong!");
    }
  } catch (error) {
    toast("Something Went Wrong!");
    dispatch({
      type: types.FETCHING_STOPS,
      payload: false,
    });
  }
};
