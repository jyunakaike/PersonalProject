import React, { useState } from 'react'
import '@styles/Todo.scss'
import InitialState from '../InitialState'

// component
import { DetailSection } from '@components/todo/DetailSection'
import { TodoList } from '../components/todo/TodoList'
import { TodoItem } from '../components/todo/TodoItem'
const ToDo = () => {
    const [task, setTask] = useState(InitialState.task)

    // TodoList SaveTodo
    const saveTodo = (taskValue) => {
        const addTask = taskValue => {
            setTask(
                task => [...task, taskValue]
            )
        }
        addTask(taskValue);
        console.log(task);
    }

    return (
        <React.Fragment>
            <h1>Todo</h1>
            <div className='Todo-Container'>
                <DetailSection />
                <TodoList task={task} saveTodo={saveTodo} >
                    <TodoItem task={task} />
                </TodoList>
            </div>
        </React.Fragment>
    )
}

export default ToDo
