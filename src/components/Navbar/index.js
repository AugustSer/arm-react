import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const dispatch = useContext(UserDispatchContext)
  const user = useContext(UserContext)
  function handleLogout() {
    dispatch({
      type: 'logout'
    })
  }
  return (
    <div className={styles.nav_panel}>
      <a className = {styles.nav_link} href='/guide'> Справочник</a>
      
      <a className = {styles.nav_link} href='/accounting'> Учёт</a>
      {!user
        ? <a className = {styles.login_link} href='/login'>Войти</a>
        : <>
          <a className = {styles.nav_link} href='/personalaccount'>Личный кабинет</a>
          <a className = {styles.login_link} href='/login' onClick={() => handleLogout()}>Выход</a>
        </>
      }
    </div>
  )
}
