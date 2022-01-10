import React from 'react'

import { TodoItem } from './TodoItem'

export const TodoList = () => {
    return (
        <section className='TodoList-Container'>
            <header className='Todo-header'>
                <h1>My Day</h1>
            </header>
            <main className='Todo-main'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </main>

            <footer className='Todo-footer'>
                <input type="text" className='input-addTodo' name='Input-addTodo' placeholder='Add Task' />
            </footer>

        </section>
    )
}
