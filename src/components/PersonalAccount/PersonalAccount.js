import React from 'react'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { useContext } from 'react'
import styles from './PersonalAccount.module.css'

export default function PersonalAccount() {
  const user = useContext(UserContext)
  return (
    <div className= {styles.main_info_panel}>
      <div className= {styles.header}>
        Личный кабинет администратора
      </div>
      <hr></hr>
      <div className= {styles.info}>
        <div className= {styles.photo}></div>
        <div className= {styles.information}>
          <div className= {styles.inf_head}>
            Информация
          </div>
          <div className= {styles.info_elem}>Имя пользователя: {user.username}</div>
          </div>
      </div>
      <div className= {styles.bottom_text}>Техническая учетная запись</div>
      <hr className= {styles.bottom_line}></hr>
      <div className= {styles.bottom_line}></div>
    </div>
  )
}
