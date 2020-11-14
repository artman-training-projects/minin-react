import React from 'react';
import styles from './drawer.module.css';
import Backdrop from '../../UI/Backdrop';
import { NavLink } from 'react-router-dom';
import { ILinks } from '../../../types/interfaces';

interface IDrawer {
  isAuth?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<IDrawer> = ({
  isAuth,
  isOpen,
  onClose,
}): JSX.Element => {
  const classes: Array<string> = [styles.drawer];

  if (!isOpen) {
    classes.push(styles.close);
  }

  const clickHandler = () => {
    onClose();
  };

  const links: Array<ILinks> = [{ to: '/', title: 'Список', exact: true }];

  if (isAuth) {
    links.push({ to: '/quiz-creator', title: 'Создать тест', exact: false });
    links.push({ to: '/logout', title: 'Выйти', exact: false });
  } else {
    links.push({ to: '/auth', title: 'Авторизация', exact: false });
  }

  return (
    <>
      <nav className={classes.join(' ')}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                exact={link.exact}
                activeClassName={styles.active}
                onClick={clickHandler}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && <Backdrop onClick={onClose} />}
    </>
  );
};

export default Drawer;
