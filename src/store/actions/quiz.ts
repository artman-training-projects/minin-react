import axios from '../../axios/axios-quiz';
import {
  FETCH_QUIZ_ERROR,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
} from './actionsTypes';

export default function fetchQuiz() {
  return async (dispatch: any) => {
    dispatch(fetchQuizStart());

    try {
      const response = await axios.get('/quizes.json');

      const quiz: any = [];
      Object.keys(response.data).forEach((key, index) => {
        quiz.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      dispatch(fetchQuizSuccess(quiz));
    } catch (err) {
      dispatch(fetchQuizError(err));
    }
  };
}

export function fetchQuizStart() {
  return {
    type: FETCH_QUIZ_START,
  };
}

export function fetchQuizSuccess(quiz: any) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}

export function fetchQuizError(err: any) {
  return {
    type: FETCH_QUIZ_ERROR,
    err,
  };
}
