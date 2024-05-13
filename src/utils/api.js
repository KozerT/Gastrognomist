import queryString from "query-string";
import axios from "axios";

export const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    withCredentials: true,
  }
});

export const get = async (path, queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const response = await axiosInstance.get(`${path}?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
