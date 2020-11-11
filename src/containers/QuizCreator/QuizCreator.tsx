import React, { Component, ReactNode } from 'react';
import styles from './quizCreator.module.css';
import Button from '../../components/UI/Button';
import { createControl, validate, validateForm } from '../../form/formFrame';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
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
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  };

  submitHandler = (evt: any): void => {
    evt.preventDefault();
  };

  addQuestionHandler = (evt: any): void => {
    evt.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;
    const {
      question,
      option1,
      option2,
      option3,
      option4,
    } = this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          test: option1.value,
          id: option1.id,
        },
        {
          test: option2.value,
          id: option2.id,
        },
        {
          test: option3.value,
          id: option3.id,
        },
        {
          test: option4.value,
          id: option4.id,
        },
      ],
    };

    quiz.push(questionItem);

    this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  createQuizHandler = (evt: any): void => {
    evt.preventDefault();
    console.log(this.state.quiz);
    // TODO Server
  };

  changeHandler = (value: string, controlName: string): any => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({
      isFormValid: validateForm(formControls),
      formControls,
    });
  };

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

  selectChangeHandler = (evt: any): void => {
    this.setState({
      rightAnswerId: +evt.target.value,
    });
  };

  render(): ReactNode {
    return (
      <div className={styles.quizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}
            <Select
              label="Выберите правильный ответ"
              value={this.state.rightAnswerId}
              onChange={this.selectChangeHandler}
              options={[
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                { text: '3', value: 3 },
                { text: '4', value: 4 },
              ]}
            />

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
