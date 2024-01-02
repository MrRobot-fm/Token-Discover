import axios from "axios";

export const axiosSimpleHashInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SIMPLE_HASH_API_URL}`,
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const axiosNftGoInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NFT_GO_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_NFT_GO_API_KEY,
  },
});

export const axiosApiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosNftGoInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error.response.data.detail);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error.response.data.detail);
  }
);
