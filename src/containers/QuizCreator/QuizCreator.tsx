import React, { Component } from 'react';
import styles from './quizCreator.module.css';
import Button from '../../components/UI/Button';
import { createControl } from '../../form/formFrame';
import Input from '../../components/UI/Input';
import Auxiliary from '../../hoc/Auxillary';

function createOptionControl(number: number): any {
  return createControl(
    {
      id: number,
      label: `Вариант ${number}`,
      errorMessage: 'Значение не может быть пустым',
    },
    { required: true }
  );
}

function createFormControls(): any {
  return {
    question: createControl(
      {
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым',
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

class QuizCreator extends Component {
  state: any = {
    quiz: [],
    formControls: createFormControls(),
  };

  submitHandler = (evt: any): void => {
    evt.preventDefault();
  };

  addQuestionHandler = (): void => {};

  createQuizHandler = (): void => {};

  changeHandler = (value: any, controlName: any): any => {};

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(evt: any) =>
              this.changeHandler(evt.target.value, controlName)
            }
          />
          {index === 0 && <hr />}
        </Auxiliary>
      );
    });
  };

  render(): JSX.Element {
    return (
      <div className={styles.quizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}

            <select></select>

            <Button type="primary" onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="success" onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
