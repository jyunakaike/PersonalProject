import React from 'react'

export const TodoItem = ({ task}) => {
    
    let toggleCheck= (e)=>{
        console.log('tengo que cambiar a checked o unchecked')
        console.log(`${e} esta es mi id para validar que sea el todo` );
        
    }
    return (
        <div>
            {
                task.map(toDo =>
                    <div className='TodoItem-container' key={toDo.id}>
                        {(toDo.check) 
                        ? <input type="checkbox" checked onChange={() => toggleCheck(toDo.id)} />
                        : <input type="checkbox" onChange={() => toggleCheck(toDo.id)} />  }
                        {toDo.id}----------{toDo.task}----------
                    </div>
                )
            }
        </div>
    )
}
