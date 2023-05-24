import React from 'react'
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import MyNavbar from '../Navbar'

export default function Header() {
  return (
    <div className= {styles.header}>
      <div className={styles.header_logo}>АРМ администратора ПК клуба</div>
      <MyNavbar/>
    </div>
  )
}
