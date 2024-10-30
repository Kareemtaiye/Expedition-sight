import styles from "./Sidebar.module.css";
// import NavBar from "../PageNav/NavBar";
import Logo from "../Logo/Logo";
import { NavLink, Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />

      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright worldwise ... {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
