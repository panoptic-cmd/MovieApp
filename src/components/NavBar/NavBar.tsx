import SearchBar from "../Search/SearchBar";
import UserCard from "../UserCard/UserCard";
import MenuIcon from "./MenuIcon";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="usercard">
          <UserCard />
        </div>

        <div className="menubutton">
          <MenuIcon size={32} />
        </div>
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
