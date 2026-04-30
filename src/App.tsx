import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import PopularList from "./components/MyList/PopularList";
import FeaturedFilms from "./components/FeaturedSection/Featured";
import TvFetchTest from "./components/tvfetchtest/tvfetchtest";

function App() {
  return (
    <div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div>
        <FeaturedFilms />
      </div>

      <div>
        <PopularList />
      </div>

      <div>
        <TvFetchTest />
      </div>
    </div>
  );
}

export default App;
