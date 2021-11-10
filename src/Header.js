import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img id="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="" />
      <h1><Link to="/">Space Travelers</Link></h1>
    </div>
    <ul>
      <li><NavLink to="/rockets" activeClassName={styles.active}>Rockets</NavLink></li>
      <li><NavLink to="/missions" activeClassName={styles.active}>Missions</NavLink></li>
      <li><NavLink to="/profile" activeClassName={styles.active}>My Profile</NavLink></li>
    </ul>
  </header>
);

export default Header;
