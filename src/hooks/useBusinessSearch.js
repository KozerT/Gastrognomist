import { useState, useEffect } from "react";
import * as api from "../utils/api.js";

const useBusinessSearch = (term, location, sortBy) => {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState(0);
  const [searchParams, setSearchParams] = useState({ term, location, sortBy });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const { businesses, total } = await api.get(
          "/businesses/search",
          searchParams
        );
        setBusinesses(businesses);
        setAmountResults(total);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };
    fetchData();
  }, [searchParams]);

  return [businesses, amountResults, searchParams, setSearchParams];
};

export default useBusinessSearch;
