import React from 'react';
import styles from './activeQuiz.module.css';

const ActiveQuiz: React.FC = (props) => {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>1.</strong> Как дела?
        </span>

        <small>4 из 12</small>
      </p>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default ActiveQuiz;
