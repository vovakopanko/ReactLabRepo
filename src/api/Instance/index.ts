import Axios from "axios";

// const API_URL = "http://localhost:3000/";

// export const instance = Axios.create({
//   withCredentials: true,
//   baseURL: API_URL,
// });

const API_MONGODB = "http://localhost:8000/api/auth/";

export const instanceMongoDB = Axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: true,
  baseURL: API_MONGODB,
});

instanceMongoDB.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
