import { ADD_TODO, DELETE_TODO, FILTER_TODO, EDIT_TODO, COMPLITE_TODO} from './types'
import { v4 as uuidv4 } from 'uuid';

export const addTodo = ( description ) => (
    {
        type: ADD_TODO,
        description,
        id: uuidv4(),
        isDone: false,
    } );

export const filterTodo = ( filter ) => (
    {
        type: FILTER_TODO,
        filter
    } )
 
export const deleteTodo = ( id ) => (
    {
        type: DELETE_TODO,
        id
    } )

export const editTodo = ( description, id, isDone ) => (
    {
        type: EDIT_TODO,
        description,
        id,
        isDone
    } )
export const compliteTodo = ( id, isDone ) => (
    {
        type: COMPLITE_TODO,
        id,
        isDone
    } )




