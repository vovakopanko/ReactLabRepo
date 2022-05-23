import Axios, { AxiosRequestConfig } from "axios";

const API_MONGODB = "http://localhost:8000/api/auth/";

type Interceptor = {
  Authorization: string;
};

export const instanceMongoDB = Axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: true,
  baseURL: API_MONGODB,
});

instanceMongoDB.interceptors.request.use<AxiosRequestConfig<Interceptor>>(
  (config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
);
