import axios from "axios";
import { ENDPOINT } from "../constants"

export function fetchThumbs() {
  return function(dispatch) {
    return axios.get(ENDPOINT).then(({ data }) => {
      dispatch(setThumbs(data));
    });
  };
}

function setThumbs(data) {
  return {
    type: "SET_ALL",
    payload: data
  };
}