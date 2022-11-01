import React from 'react'
import MenuBar from '../Menu/index'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h2>Home</h2>
        </div>

        <div>
            <MenuBar/>
        </div>
      
    </div>
  )
}

export default Header
