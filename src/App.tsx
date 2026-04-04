import styles from "./App.module.css"
import SearchBar from "./components/Search/SearchBar";
import MyList from "./components/MyList/PopularList";
import FeaturedFilms from "./components/Featured/Featured";
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
        <MyList />
      </div>

      <div><TvFetchTest/></div>
    </div>
  );
}

export default App;
