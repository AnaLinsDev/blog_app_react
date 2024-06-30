/* eslint-disable react/prop-types */
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteCommand }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    event.preventDefault();

    onDeleteCommand(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/60307596?v=4"
      />

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
