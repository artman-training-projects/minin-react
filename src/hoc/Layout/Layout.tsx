import React, { Component, ReactChild } from 'react';
import styles from './layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle';
import Drawer from '../../components/Navigation/Drawer';

class Layout extends Component<any, any> {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={styles.layout}>
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />

        <MenuToggle
          isOpen={this.state.menu}
          onToggle={this.toggleMenuHandler}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
