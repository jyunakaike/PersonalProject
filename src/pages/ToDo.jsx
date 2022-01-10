import React from 'react'
import '@styles/Todo.scss'

// component
import { DetailSection } from '@components/todo/DetailSection'
import { TodoList } from '../components/todo/TodoList'
const ToDo = () => {
    return (
        <React.Fragment>
            <h1>Todo</h1>
            <div className='Todo-Container'>
                <DetailSection />
                <TodoList />
            </div> 
        </React.Fragment>
    )
}

export default ToDo
