import React, { useState } from 'react'
import MainTable from '../MainTable'
import styles from './Guide.module.css'

export default function Guide() {
  
  const [clients, setClient] = useState(
    [
      {id: 1, name:'Петров Иван Алексеевич', number_lk: '700'}
    ]
  )
  const headers = {
    1: 'Код посетителя',
    2: 'ФИО',
    3: 'Номер личного кабинета'
  }
  
  const [element, setElement] = useState({id: '', name: '', number_lk: ''})

  const addNewElement = (e) => {
    e.preventDefault()
    const newElement = {
        ...element, id: Date.now()
    }
    createClient(newElement)
    setElement({id: '', name: '', number_lk: ''})
  }

  const removeClient = (post) => {
    setClient(clients.filter(p => p.id !== post.id))
  }

  const createClient = (newClient) => {
    
    setClient([...clients, newClient])
  }

  const type = "Guide"
  return (
    <div className= {styles.main}>
      <MainTable elements = {clients} removeElement = {removeClient} headers = {headers} type = {type}/>
      <div className={styles.post_form}>
          <input onChange = {e => setElement({...element, name: e.target.value})} placeholder="ФИО" value={element.name}></input>
          <input onChange = {e => setElement({...element, number_lk: e.target.value})} placeholder="Номер личного кабинета" value={element.number_lk}></input>
          <button onClick={addNewElement}>Добавить</button>
      </div>
    </div>
    
  )
}
