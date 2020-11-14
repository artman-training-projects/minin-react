import React, { PropsWithChildren, useState } from 'react';
import styles from './layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle';
import Drawer from '../../components/Navigation/Drawer';
import { connect } from 'react-redux';
import { IState } from '../../types/interfaces';

interface ILayout {
  children: PropsWithChildren<JSX.Element>;
  isAuth?: boolean | undefined;
}

const Layout: React.FC<ILayout> = ({ children, isAuth }): JSX.Element => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleMenuHandler: () => void = () => setIsMenu(!isMenu);
  const menuCloseHandler: () => void = () => setIsMenu(false);

  return (
    <div className={styles.layout}>
      <Drawer isOpen={isMenu} onClose={menuCloseHandler} isAuth={isAuth} />

      <MenuToggle isOpen={isMenu} onToggle={toggleMenuHandler} />

      <main>{children}</main>
    </div>
  );
};

function mapStateToProps(state: IState): IState {
  return {
    isAuth: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
