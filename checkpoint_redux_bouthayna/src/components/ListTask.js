import { useDispatch } from 'react-redux'
import React from "react";
import { useSelector } from 'react-redux'
import { filterTodo } from '../actions/actionTodo'

import Task from './Task'

const ListTask = () => {

    const dispatch = useDispatch()

    const filterTodos = ( todo, filter ) => {
        switch ( filter ) {
            case "TODO_DONE":
                return todo.filter( todo => todo.isDone === true );
            case "TODO_UNDONE":
                return todo.filter( todo => todo.isDone === false );
            default:
                return todo;
        }
    };

    const todo = useSelector( 
        ( state ) => filterTodos( state.todoReducer.data, state.filterReducer.sow ),
    )

    const tasks = todo != null && todo.map( ( elt, index ) => {
        return <li><Task todo={elt} index={index} /></li>
    } )

    return (
        <>
            <div className="filter">
                <button id="all"
                    onClick={() => {
                    dispatch( filterTodo( 'ALL_TODO' ) )
                    document.getElementById( 'erreurTodo' ).textContent = ""}} style={{ marginLeft: "4px" }}>
                All    </button>
                <button onClick={() => {
                    dispatch( filterTodo( 'TODO_DONE' ) )
                    document.getElementById( 'erreurTodo' ).textContent = ""
               }} style={{ marginLeft: "4px" }}>
                Done            </button>
                <button onClick={() => {
                    dispatch( filterTodo( 'TODO_UNDONE' ) )
                    document.getElementById( 'erreurTodo' ).textContent = ""
                }} style={{ marginLeft: "4px" }}>
                    Undone            </button></div>
            <br></br>
            <p id="erreurTodoUpdate" style={{ color: "red", marginBottom: '5px' }}></p>
            <ul className="todoList">
                    {tasks}  </ul>
                
        </>
    )
};

export default ListTask;

