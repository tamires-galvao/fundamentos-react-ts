/* eslint-disable react/prop-types */
import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
        return state + 1;
    });
  }

  return(
    <div className={styles.comment}> 
      <Avatar src='https://github.com/tamires-galvao.png' hasBorder={false} />
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tamires Moreno</strong>
              <time title='01 de Novembro ás 20:33' dateTime='2023-11-01 20:32:00'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping/>
            Aplaudir<span>{likeCount}</span>
          </button>  
        </footer>
      </div>
    </div>
  );
}