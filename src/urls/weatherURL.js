const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const GET_WEATHER_DETAILS_URL = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40`;
export const GET_WEATHER_ICON_URL = `http://openweathermap.org/img/wn`;
