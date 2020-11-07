import React, {useState} from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';

const Quiz: React.FC = () => {
  const [quiz, setQuiz] = useState();

  return (
    <div className={styles.quiz}>
      <div className={styles.quizWrapper}>
        <h1>Quiz</h1>
        <ActiveQuiz />
      </div>
    </div>
  );
}

export default Quiz;
