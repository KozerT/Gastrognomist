import { useState, useEffect } from "react";
import * as api from "../utils/api.js";
import { useSearchContext } from "../contexts/SearchContext.jsx";

const useBusinessSearch = ({sortBy}) => {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState(0);
  const { searchParams, setSearchParams } = useSearchContext();

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const { businesses, total } = await api.get(
          "/businesses/search",
          searchParams,
        );
        
        let sortedBusinesses = businesses;
        if (searchParams.sortBy === "rating") {
          sortedBusinesses = businesses.sort((a, b) => b.rating - a.rating);
        } else if (searchParams.sortBy === "review_count") {
          sortedBusinesses = businesses.sort(
            (a, b) => b.review_count - a.review_count
          );
        }

        setBusinesses(sortedBusinesses);
        setAmountResults(total);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };
    fetchData();
  }, [searchParams, setSearchParams,sortBy ]);

  return [businesses, amountResults];
};

export default useBusinessSearch;
