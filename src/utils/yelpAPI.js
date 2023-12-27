const API_KEY =
  "O2V8fnGI2CwpXdhKHUrondcaz2PTZaa3rYkaxrCf1l8v6676_t2POsZJ5YNQVstsGfKQMQ3l_wZFQ_O1tUk8LebVcJhbL5uvneN-xf-L9DiF-hcM6i8cxtscLxuMZXYx";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://api.yelp.com/v3/businesses/search";

export const searchBusinesses = async (searchTerm, location, sortBy) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`, // Replace with your actual Yelp API key
      },
    };

    const response = await fetch(
      `${CORS_PROXY}${API_URL}?term=${searchTerm}&location=${location}&sort_by=${sortBy}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.businesses;
    // const businesses = data.businesses.map((business) => ({
    //   name: business.name,
    // }));

    // return businesses;
  } catch (error) {
    throw new Error(`Error fetching businesses: ${error.message}`);
  }
};
