const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const searchBusinesses = async (searchTerm, location, sortBy) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      },
    };

    const response = await fetch(
      `${CORS_PROXY}${process.env.REACT_APP_API_YELP_URL}?term=${searchTerm}&location=${location}&sort_by=${sortBy}`,
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
