import Axios from "axios";

// [General example for API requests]

const API_URL = "http://localhost:3000/";
const API_MONGODB = "http://localhost:8000/api/auth/";

export const instance = Axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

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
