import SearchBar from "../Search/SearchBar";
import UserCard from "../UserCard/UserCard";
import MenuIcon from "./MenuIcon";
import styles from "./NavBar.module.css";
import {useState} from 'react';

function NavBar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen ? "Menu fechado" : "Menu aberto");
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.usercard}>
          <UserCard />
        </div>

        <div  >
          <button className={styles.menuButton} onClick={toggleMenu}>
          <MenuIcon size={28} />
          </button>
          
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;
