import React from 'react';
import { Link } from 'react-router-dom';
import styles from './finishedQuiz.module.css';
import Button from '../UI/Button';
import { IQuiz, IResults } from '../../types';

interface IFinishedQuiz {
  results: IResults;
  quiz: IQuiz[];
  onRetry: any;
}

const FinishedQuiz: React.FC<IFinishedQuiz> = ({
  results,
  quiz,
  onRetry,
}): JSX.Element => {
  const successCount: number = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={styles.finishedQuiz}>
      <ul>
        {quiz.map((quizItem: any, i: any) => {
          const classes: Array<string> = [
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
        <Button onClick={onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
