import React from 'react';
import './App.css'


const ToDoList = (props) => {

    return(
        <>
        <div className="todo_style">
        <button onClick={() => {
            props.onSelect(props.id);
        }}> * </button>  
        <li> {props.val} </li>
        </div>
       
        </>
    )
}

export default ToDoList;