import { axiosInstance } from "../axios-instance";

export const getTopCollections = async () => {
  const response = await axiosInstance.get("/collections/trending", {
    params: { time_period: "24h", limit: "3" },
  });

  return response.data;
};
