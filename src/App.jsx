import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <SideBar></SideBar>
        <div>
          <Post />
        </div>
      </div>
    </>
  );
}
