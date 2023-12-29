// import "whatwg-fetch";

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const API_ENDPOINT =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

export const searchBusinesses = async (term, location, sortBy) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();
    if (data.businesses) {
      const businesses = data.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
      return businesses;
    } else {
      throw new Error("Invalid JSON format");
    }
  } catch (error) {
    throw new Error("Error fetching businesses: " + error.message);
  }
};

export default searchBusinesses;
