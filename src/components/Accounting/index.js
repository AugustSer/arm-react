import React from 'react'
import { useState } from 'react'
import MainTable from '../MainTable'
import styles from './Accounting.module.css'


export default function Accounting() {


  const [clients, setClient] = useState(
    [
      {id: 1, name:'Петров Иван Алексеевич', time: '08:30'},
      {id: 2, name:'Петров Иван Алексеевич', time: '09:30'},
      {id: 3, name:'Петров Иван Алексеевич', time: '10:30'},
      {id: 4, name:'Петров Иван Алексеевич', time: '11:30'},
      {id: 5, name:'Петров Иван Алексеевич', time: '12:30'},
      {id: 6, name:'Петров Иван Алексеевич', time: '13:30'},
      {id: 7, name:'Петров Иван Алексеевич', time: '14:30'},
      {id: 8, name:'Петров Иван Алексеевич', time: '15:30'},
    ]

  )


  const headers = {
    1: 'Код посетителя',
    2: 'ФИО',
    3: 'Время (час/мин)'
  }
  
  const [element, setElement] = useState({id: '', name: '', time: ''})

  const addNewElement = (e) => {
    e.preventDefault()
    const newElement = {
        ...element, id: Date.now()
    }
    createClient(newElement)
    setElement({id: '', name: '', time: ''})
  }

  const removeClient = (post) => {
    setClient(clients.filter(p => p.id !== post.id))
  }

  const createClient = (newClient) => {
    
    setClient([...clients, newClient])
  }

  const type = "Accounting"

  return (
    <div>
        <MainTable elements = {clients} removeElement = {removeClient} headers = {headers} type = {type}/>
        <div className={styles.post_form}>
          <input onChange = {e => setElement({...element, name: e.target.value})} placeholder="ФИО" value={element.name}></input>
          <input onChange = {e => setElement({...element, time: e.target.value})} placeholder="Время" value={element.time}></input>
          <button onClick={addNewElement}>Добавить</button>
      </div>
    </div>
  )
}
