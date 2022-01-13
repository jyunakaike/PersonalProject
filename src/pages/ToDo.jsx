import React, { useState } from 'react'
import '@styles/Todo.scss'
import InitialState from '../InitialState'

// component
import { DetailSection } from '@components/todo/DetailSection'
import { TodoList } from '../components/todo/TodoList'
import { TodoItem } from '../components/todo/TodoItem'
const ToDo = () => {
    const [task, setTask] = useState(InitialState.task)

    //search
    const [search, setSearch] = useState('')
    let searchedTodos = [];

    if (!search.length >= 1) {
        searchedTodos = task;
    } else {
        searchedTodos = task.filter(task => {
            const todoText = task.task.toLowerCase();
            const searchText = search.toLowerCase();
            return todoText.includes(searchText);
        });
    }

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

    // TodoItem 
    const toggleCheck = (e) => {
        const findIndex = task.findIndex(todo => todo.id === e)
        const newTask = [...task]
        newTask[findIndex].check = !(newTask[findIndex].check);
        setTask(newTask)
        console.log(`toggle check changed to ${newTask[findIndex].check}`)
        console.log(findIndex);
    }
    //delete task

    const deleteTask = (e) => {
        const findIndex = task.findIndex(todo => todo.id === e)
        const deleteTask = [...task];
        deleteTask.splice((findIndex), 1);
        setTask(deleteTask);
        console.log(deleteTask);
    }

    return (
        <React.Fragment>
            {/* <h1>Todo</h1> */}
            <div className='Todo-Container'>
                <DetailSection search={search} setSearch={setSearch} />
                <TodoList task={task} saveTodo={saveTodo} >
                    <TodoItem task={searchedTodos} toggleCheck={toggleCheck} deleteTask={deleteTask} />
                </TodoList>
            </div>
        </React.Fragment>
    )
}

export default ToDo
