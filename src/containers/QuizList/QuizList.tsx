import React, { Component, ReactNode } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from './quizList.module.css';

class QuizList extends Component {
  state: any = {
    quiz: [],
  };

  renderQuiz(): React.ReactFragment {
    return this.state.quiz.map((quiz: any) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://react-quiz-test-2e76e.firebaseio.com/quizes.json'
      );

      const quiz: any = [];
      Object.keys(response.data).forEach((key, index) => {
        quiz.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      this.setState({
        quiz,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.quizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>{this.renderQuiz()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
