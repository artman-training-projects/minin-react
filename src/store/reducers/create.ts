import { IAction, IState } from '../../types/interfaces';
import {
  CREATE_QUIZ_QUESTION,
  RESET_QUIZ_CREATION,
} from '../actions/actionsTypes';

const initialState: IState = {
  quiz: [],
};

export default function createReducer(
  state: IState = initialState,
  action: IAction
) {
  switch (action.type) {
    case CREATE_QUIZ_QUESTION:
      return {
        ...state,
        quiz: [...state.quiz, action.item],
      };
    case RESET_QUIZ_CREATION:
      return {
        ...state,
        quiz: [],
      };
    default:
      return state;
  }
}
