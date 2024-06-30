import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://avatars.githubusercontent.com/u/60307596?v=4" />
          

          <div className={styles.authorInfo}>
            <strong>Maria José</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="Publicado 27 de Junho de 2024 às 20h"
          dateTime="2024-06-27 20:20:20"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea  placeholder="Deixe um comentário"/>

        <footer>
            <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

      <Comment />

      <Comment />

      <Comment />
      
      </div>

    </article>
  );
}
