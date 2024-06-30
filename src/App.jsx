import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

import posts from "./data/posts";

export function App() {
  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <SideBar></SideBar>
        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
