import React, { createContext, useReducer } from 'react'
import { TaskMangeReducer, primaryState } from '../Reducers/TaskReducer'

export const todoContext = createContext()

const TaskContext = ({ children }) => {

    const [todos, dispatch] = useReducer(TaskMangeReducer, primaryState)

    const addToDo = ({ todoName, status, priority }) => {
        dispatch({
            type: 'ADD_TODO',
            payload: { todoName, status, priority }
        })
    }



    return (
        <todoContext.Provider value={{ todos, addToDo }}>
            {children}
        </todoContext.Provider>
    )
}

export default TaskContext