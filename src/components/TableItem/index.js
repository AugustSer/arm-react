import React from 'react'
import styles from './TableItem.module.css'
const TableItem = (props) => {
    if (props.type == 'Guide') {
        return(
            <tr>
                <td className= {styles.table_elem}>{props.number}</td>
                <td className= {styles.table_elem}>{props.post.name}</td>
                <td className= {styles.table_elem}>{props.post.number_lk}</td>
                <td className= {styles.table_elem}><button className= {styles.delete_btn} onClick={() => props.removeElement(props.post)}></button></td>
            </tr> 
        )
    }else {
        return(
            <tr>
                <td className= {styles.table_elem}>{props.number}</td>
                <td className= {styles.table_elem}>{props.post.name}</td>
                <td className= {styles.table_elem}>{props.post.time}</td>
                <td className= {styles.table_elem}><button className= {styles.delete_btn} onClick={() => props.removeElement(props.post)}></button></td>
            </tr>
        )
    }
  
}

export default TableItem