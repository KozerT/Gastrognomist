import BusinessList from "../components/BusinessList";
import Header from "../components/navigation/Header";
import { SearchProvider, useSearchContext } from "../contexts/SearchContext";
import useBusinessSearch from "../hooks/useBusinessSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const SearchResults = () => {
  const { searchParams , setSearchParams} = useSearchContext();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");

  const [businesses] = useBusinessSearch(
    term || searchParams.term,
    locationParam || searchParams.location,
    searchParams.sortBy
  );

  useEffect(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);


  const performSearch = (term, location, sortBy) => {
    setSearchParams({ term, location });
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    const encodedSortBy = encodeURI(sortBy);
    navigate(`/search-results?find_desc=${encodedTerm}&find_loc=${encodedLocation}&sort_by=${encodedSortBy}`);
  };

  return (
    <SearchProvider>
      <div className="relative min">
      <Header showSearchFields={true} performSearch={performSearch}  />
      <div className="container py-8 mx-auto min">
        <BusinessList businesses={businesses} />
      </div>
      </div>
    </SearchProvider>
  );
};

export default SearchResults;
