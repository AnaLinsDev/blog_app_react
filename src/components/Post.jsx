/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

/*
Alternativa para manipulação de datas:

OPÇÃO 01: 
Usar a biblioteca date-fns 
e sua documentação para encontrar o formato desejado.
https://date-fns.org/v3.6.0/docs/format

_____________________________________________________________

OPÇÃO 02:
Usar o INTL para formatar as datas no formato que precisamos.
MDN INTL Intl.DateTimeFormat

const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(publishedAt);

*/

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito legal !"]);
  const [newComment, setNewComment] = useState("");

  // Usando date-fns
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function deleteCommand(commentToDelete) {
    /*
    Conceito Imutabilidade:
      As variáveis não sofrem alterações, apenas entregamos o novo valor 
      (um novo espaço na meória).
    */

    const commentsWithoutDeleted = comments.filter(
      (comment) => comment != commentToDelete
    );

    setComments(commentsWithoutDeleted);
  }

  function handleCreateNewComment() {
    event.preventDefault(); // Para que a a tela não seja redirecionada

    setComments([...comments, newComment]);

    setNewComment("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Campo obrigatório !");
  }

  const isNewCommentEmpty = newComment.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          } else {
            return (
              <a key={line.content} href="">
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteCommand={deleteCommand}
            />
          );
        })}
      </div>
    </article>
  );
}
