import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Menu.module.css';

const MenuBar = () => {

  return (
    <div>
      <ul className={styles.ulstyle}>
          <li className= {styles.listyle}>
            <NavLink to="/componentone" className={styles.applink} > First Component </NavLink></li>
          <li className= {styles.listyle}>
            <NavLink to="/componenttwo" className={styles.applink}> Second Component </NavLink></li>
          <li className= {styles.listyle}>
            <NavLink to="/componentthree" className={styles.applink}> Third Component </NavLink></li>
        </ul>
    </div>
  )
}

export default MenuBar
