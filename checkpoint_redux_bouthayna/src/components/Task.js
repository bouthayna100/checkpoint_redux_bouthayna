import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions/actionTodo'
import { editTodo } from '../actions/actionTodo'
import { compliteTodo } from '../actions/actionTodo'


const Task = ( props ) => {
        const dispatch = useDispatch()
        const [ isUpdate, setIsUpdate ] = useState( false )
        
        const renderForm = () => {
                return (
                        <form name="form1" className="inputFieldUpdate" >
                                <input  type="text" name="todoUpdate" defaultValue={props.todo.description} ></input>
                                <button type="button" onClick={( e ) => {
                                        if ( document.form1.todoUpdate.value === "" ) {
                                                document.getElementById( 'erreurTodoUpdate' ).textContent = "Todo update should be not empty";
                                        }
                                        else {
                                                let input = document.form1.todoUpdate.value;
                                                dispatch( editTodo( input, props.todo.id, props.todo.isDone ) )
                                                setIsUpdate( false )
                                                document.getElementById( 'erreurTodoUpdate' ).textContent = "";
                                                document.getElementById( 'erreurTodo' ).textContent = ""

                                        }
                                }}> <i className="fas fa-paper-plane"></i></button>
                </form>
        )
}
        const renderItem = () => {
                return (
  <div key={props.index}>
  <input type="text" className="inputDesc" value={props.todo.description} readOnly></input>
                   <span className="icon" onClick={() =>
                                                dispatch( deleteTodo( props.todo.id ) )
                               }><i className="fas fa-trash"></i></span>
   <button onClick={() => { setIsUpdate( true ) }} className="modif"><i className="fas fa-edit"></i></button>

                                <span style={{ color: props.todo.isDone ? "red" : "green" }}

                                      >{props.todo.isDone ? "done" : "undone"}</span>
                                <button  className="modif"
         style={{ backgroundColor: props.todo.isDone ? "green" : "red" }}

                                        onClick={() => {
                    dispatch( compliteTodo( props.todo.id, props.todo.isDone ) )
       
                                        }}>
                                        {props.todo.isDone ? <i className="fa fa-toggle-on"></i>           
 :                                         <i className="fa fa-toggle-off"></i>          
}
                                </button>

                </div>
        )
}
        return(
                <>

                        {
                                isUpdate ? renderForm() : renderItem()
}                               
                        </>
        )
        
};

export default Task;