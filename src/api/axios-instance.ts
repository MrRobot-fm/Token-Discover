import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SIMPLE_HASH_API_URL}`,
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
  },
});
