import React from 'react';
import styles from './drawer.module.css';
import Backdrop from '../../UI/Backdrop';

const links: number[] = [1, 2, 3];

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<IDrawer> = ({ isOpen, onClose }): JSX.Element => {
  const classes: Array<string> = [styles.drawer];

  if (!isOpen) {
    classes.push(styles.close);
  }

  return (
    <>
      <nav className={classes.join(' ')}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">Link {link}</a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && <Backdrop onClick={onClose} />}
    </>
  );
};

export default Drawer;
