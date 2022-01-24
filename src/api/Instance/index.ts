import Axios from "axios";

// [General example for API requests]

export const instance = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
});
