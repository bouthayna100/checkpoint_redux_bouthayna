import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/actionTodo'
const AddTask = () => {
    const dispatch = useDispatch()
    return ( <>
        <form name="form" className="inputField"  >
            <input type="text" placeholder="Add your new todo" name="todo"/>
            <button type='button' onClick={() => {
                if ( document.form.todo.value === "" ) {
                    document.getElementById( 'erreurTodo' ).textContent = "Todo should be not empty";
                }
                else {
                    document.getElementById( 'erreurTodo' ).textContent = ""
                    dispatch( addTodo( document.form.todo.value ) )
                    document.form.todo.value = ""
                    document.getElementById( "all" ).click();

                }
            }}  ><i className="fas fa-plus"></i></button>
    </form>
        <p id="erreurTodo" style={{ color: "red", marginBottom:'5px' }}></p>
        </>
    )
}
export default AddTask ;