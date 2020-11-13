import React, { PropsWithChildren, useState } from 'react';
import styles from './layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle';
import Drawer from '../../components/Navigation/Drawer';
import { connect } from 'react-redux';

const Layout: React.FC<PropsWithChildren<any>> = (props): JSX.Element => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleMenuHandler: () => void = () => setIsMenu(!isMenu);
  const menuCloseHandler: () => void = () => setIsMenu(false);

  return (
    <div className={styles.layout}>
      <Drawer
        isOpen={isMenu}
        onClose={menuCloseHandler}
        isAuth={props.isAuth}
      />

      <MenuToggle isOpen={isMenu} onToggle={toggleMenuHandler} />

      <main>{props.children}</main>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    isAuth: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
