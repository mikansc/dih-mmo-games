import { URLS } from "../config/urls";

const onSuccess = (data) => {
  if (data.status === 200) {
    return data.json();
  } else {
    throw new Error("An error has occurred: " + data.status);
  }
};

const onError = (error) => {
  console.error(error);
  throw new Error("HTTP request error");
};

const getHeaders = () => {
  return {
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY
  };
};

const get = (resource) => {
  return fetch(`${URLS.API_BASE}/${resource}`, {
    method: "GET",
    headers: getHeaders()
  }).then(onSuccess).catch(onError);
};

export const HttpService = {
  get
};
