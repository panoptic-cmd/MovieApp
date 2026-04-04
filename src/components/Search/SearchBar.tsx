import SearchIcon from "./SearchIcon";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles.icon}>
          <SearchIcon size={24} />
        </div>

        <input type="text" placeholder="Search" className= {styles.searchBar} />
      </div>
    </div>
  );
}

export default SearchBar;
