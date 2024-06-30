import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/60307596?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maria José</strong>
              <time
                title="Publicado 27 de Junho de 2024 às 20h"
                dateTime="2024-06-27 20:20:20"
              >
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>
          <p>texto do user</p>
        </div>

        <footer>
            <button>
                <ThumbsUp size={20} />
                Aplaudir - <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
