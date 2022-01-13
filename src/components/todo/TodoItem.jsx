import React, { useState } from 'react'

export const TodoItem = ({ task, toggleCheck, deleteTask }) => {
    const [check, setCheck] = useState(true)

    return (
        <div>
            {
                task.reverse().map(toDo =>
                    <div className='TodoItem-container' key={toDo.id}>
                        {(toDo.check)
                            ? <input type="checkbox" defaultChecked={check} onChange={() => toggleCheck(toDo.id)} />
                            : <input type="checkbox" defaultChecked={!check} onChange={() => toggleCheck(toDo.id)} />}
                        {toDo.task}
                        <icon onClick={() => deleteTask(toDo.id)}>X</icon>
                    </div>
                )
            }
        </div>
    )
}
