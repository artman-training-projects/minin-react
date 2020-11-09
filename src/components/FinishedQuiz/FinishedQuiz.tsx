import React from 'react';
import styles from './finishedQuiz.module.css';
import { IQuiz, IResults } from '../../types';

interface IFinishedQuiz {
  results: IResults;
  quiz: IQuiz[];
  onRetry: () => void;
}

const FinishedQuiz: React.FC<IFinishedQuiz> = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={styles.finishedQuiz}>
      <ul>
        {quiz.map((quizItem: any, i: any) => {
          const classes = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[results[quizItem.id]],
          ];

          return (
            <li key={i}>
              <strong>{i + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={classes.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {quiz.length}
      </p>

      <div>
        <button onClick={onRetry}>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
