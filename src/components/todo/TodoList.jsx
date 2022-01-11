import React from 'react'

import { TodoItem } from './TodoItem'

export const TodoList = ({ task, saveTodo, children }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        console.log(formData.get('task'));
        const data = {
            'id': 6 ,
            'task': formData.get('task'),
            'check': false,
            'dateStart':'2021/01/10'
        }
        saveTodo(data)
    };
    return (
        <section className='TodoList-Container'>
            <header className='Todo-header'>
                <h1>My Day</h1>
            </header>
            <main className='Todo-main'>
                {/* <TodoItem task={task} /> */}
                {children}
            </main>
            <footer className='Todo-footer'>
                <form action="" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className='input-addTodo' 
                        id='task'
                        name='task' 
                        placeholder='Add Task'
                    />
                    <input type="submit" className='input-send' />
                </form>
            </footer>
        </section>
    )
}
