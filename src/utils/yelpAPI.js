import axios from "axios";
import queryString from "query-string";

export const searchBusinesses = async (term, location, sortBy) => {
  try {
    const queryParams = {
      term: term,
      location: location,
      sort_by: sortBy,
    };

    const queryStringified = queryString.stringify(queryParams);

    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${queryStringified}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        Origin: "localhost",
        withCredentials: true,
      },
    });
    console.log("Yelp API Response:", response.data);
    return response.data.businesses;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    throw error;
  }
};
