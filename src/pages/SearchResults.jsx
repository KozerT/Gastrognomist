import BusinessList from "../components/BusinessList";
import Header from "../components/navigation/Header";
import { SearchProvider } from "../contexts/SearchContext";

const SearchResults = () => {
  const businesses = [
    { id: 1, name: "Restaurant 1" },
    { id: 2, name: "Restaurant 2" },
  ];

  return (
    <SearchProvider>
      <Header showSearchFields={true} />
      <div className="container py-8 mx-auto">
        <BusinessList businesses={businesses} />
      </div>
    </SearchProvider>
  );
};

export default SearchResults;
