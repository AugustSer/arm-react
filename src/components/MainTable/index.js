import React from "react";
import styles from "./MainTable.module.css";
import TableItem from '../TableItem'
import { useState } from "react";

const MainTable = (props) => {


    return(
        <div>
            <table className={styles.scroll_table}>
                <tr className = {styles.table_header}>
                    <td className={styles.table_header_el}>{props.headers[1]}</td>
                    <td className={styles.table_header_el}>{props.headers[2]}</td>  
                    <td className={styles.table_header_el}>{props.headers[3]}</td>  
                    <td className={styles.table_header_el}>Удалить</td>       
                </tr>
            </table>
            <table className={styles.scroll_table_body}>{props.elements.map((post, index) =>
                <TableItem type = {props.type} removeElement = {props.removeElement}  number = {index + 1} post = {post}/>)}
            </table>
        </div>
    )
}

export default MainTable;