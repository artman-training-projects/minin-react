import React from 'react';
import styles from './activeQuiz.module.css';
import AnswersList from './AnswersList';
import { IAnswer, IResults } from '../../types/interfaces';

interface IActiveQuiz {
  answers: Array<IAnswer>;
  question: string;
  onAnswerClick: Function;
  answerNumber: number;
  quizLength: number;
  answerState: IResults | null;
}

const ActiveQuiz: React.FC<IActiveQuiz> = ({
  answers,
  question,
  onAnswerClick,
  answerNumber,
  quizLength,
  answerState,
}): JSX.Element => {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>{answerNumber}.</strong> {question}
        </span>

        <small>
          {answerNumber} из {quizLength}
        </small>
      </p>

      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
};

export default ActiveQuiz;
