import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionsTypes';
import axios from '../../axios/axios-quiz';

export function createQuizQuestion(item: any) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function finishCreateQuiz() {
  return async (dispatch: any, getState: any) => {
    await axios.post('/quizes.json', getState().create.quiz);
    dispatch(resetQuizCreation());
  };
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION,
  };
}
