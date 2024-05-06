import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className=" App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
