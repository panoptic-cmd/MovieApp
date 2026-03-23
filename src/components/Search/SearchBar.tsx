import SearchIcon from "./SearchIcon";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <div className="search-container">
        <div className="icon">
          <SearchIcon size={24} />
        </div>

        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </div>
  );
}

export default SearchBar;
