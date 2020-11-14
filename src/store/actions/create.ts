import { IAction } from '../../types/interfaces';
import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionsTypes';
import axios from '../../axios/axios-quiz';

export function createQuizQuestion(item: any): IAction {
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function finishCreateQuiz(): Function {
  return async (dispatch: Function, getState: Function) => {
    await axios.post('/quizes.json', getState().create.quiz);
    dispatch(resetQuizCreation());
  };
}

export function resetQuizCreation(): IAction {
  return {
    type: RESET_QUIZ_CREATION,
  };
}
