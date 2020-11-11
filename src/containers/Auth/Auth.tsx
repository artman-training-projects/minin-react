import React, { Component } from 'react';
import styles from './auth.module.css';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

class Auth extends Component {
  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (evt: any) => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className={styles.auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={styles.authForm}>
            <Input label="Email" />
            <Input label="Пароль" errorMessage={'TEST error'} />

            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
