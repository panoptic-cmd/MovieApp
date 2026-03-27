import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MyList from "./components/MyList/PopularList";
import FeaturedFilms from "./components/Featured/Featured";
import TvFetchTest from "./components/tvfetchtest/tvfetchtest";

function App() {
  return (
    <div>
      <div>
        <NavBar />
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
