import React from 'react';
import styles from './finishedQuiz.module.css';

interface IFinishedQuiz {
  props: any;
}

const FinishedQuiz: React.FC = () => {
  return (
    <div className={styles.finishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          Some text
          <i className={'fa fa-times ' + styles.error} />
        </li>
        <li>
          <strong>1. </strong>
          Some text
          <i className={'fa fa-check ' + styles.success} />
        </li>
      </ul>

      <p>Правильно 4 из 10</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
