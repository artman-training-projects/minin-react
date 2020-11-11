import React from 'react';
import styles from './drawer.module.css';
import Backdrop from '../../UI/Backdrop';
import { NavLink } from 'react-router-dom';
import { ILinks } from '../../../types';

const links: ILinks[] = [
  { to: '/', title: 'Список', exact: true },
  { to: '/auth', title: 'Авторизация', exact: false },
  { to: '/quiz-creator', title: 'Создать тест', exact: false },
];

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<IDrawer> = ({ isOpen, onClose }): JSX.Element => {
  const classes: Array<string> = [styles.drawer];

  if (!isOpen) {
    classes.push(styles.close);
  }

  const clickHandler = () => {
    onClose();
  };

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
