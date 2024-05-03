import BusinessList from "../components/BusinessList";
import Header from "../components/navigation/Header";
import { SearchProvider } from "../contexts/SearchContext";
import useBusinessSearch from "../hooks/useBusinessSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");

  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  useEffect(() => {
    if (!term || !locationParam) {
      navigate("/");
    }
  }, [term, locationParam, navigate]);

  const search = (term, location) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    navigate(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
    performSearch({ term, location });
  };

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
