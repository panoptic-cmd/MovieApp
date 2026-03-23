import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MyList from "./components/MyList/MyList";
import FeaturedFilms from "./components/Featured/Featured";

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
    </div>
  );
}

export default App;
