import React from 'react'

export const TodoItem = ({ task }) => {
    return (
        <div>
            {
                task.map(toDo =>
                    <div className='TodoItem-container' key={toDo.id}>
                        {toDo.id}----------{toDo.task}----------{(toDo.check) ? <p>No Check</p> : <p>Check</p>}
                    </div>
                )
            }
        </div>
    )
}
