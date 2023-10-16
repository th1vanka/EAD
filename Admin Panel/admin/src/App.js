import styles from "./App.module.css";
import Navigation from "./components/navigation_bar/navigation";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <Navigation />
      </div>
      <div className={styles.body_container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
