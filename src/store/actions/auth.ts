import axios from 'axios';
import { AUTH_LOGOUT, AUTH_SUCCESS } from './actionsTypes';

export function auth(email: any, password: any, isLogin: any) {
  return async (dispatch: any) => {
    const authData = {
      email,
      password,
      returnSecureToken: isLogin,
    };

    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAKruUdui8MZ3785x_Uar70wTaEqDkuvig';

    if (isLogin) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAKruUdui8MZ3785x_Uar70wTaEqDkuvig';
    }

    const response = await axios.post(url, authData);
    const data = response.data;
    const expirationDate: any = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function authSuccess(token: any) {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}

export function autoLogout(time: any) {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout);
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
  };
}
