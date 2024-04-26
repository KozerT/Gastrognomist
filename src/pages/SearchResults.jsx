import BusinessList from "../components/BusinessList";
import Header from "../components/navigation/Header";

const SearchResults = () => {
  const businesses = [
    { id: 1, name: "Restaurant 1" },
    { id: 2, name: "Restaurant 2" },
  ];

  return (
    <>
      <div className="container py-8 mx-auto">
        <BusinessList businesses={businesses} />
      </div>
    </>
  );
};

export default SearchResults;
