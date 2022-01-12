import React, {useState} from 'react'

export const TodoItem = ({ task ,toggleCheck}) => {
    const [check, setCheck] = useState(true)

    // const toggleCheck =(e) =>{
    //     console.log('ha surgido un cambio en check');
    //     console.log(e);
    //     // toggleCheckde props
    // }


    return (
        <div>
            {
                task.map(toDo =>
                    <div className='TodoItem-container' key={toDo.id}>
                        {(toDo.check) 
                        ? <input type="checkbox" defaultChecked={check} onChange={()=> toggleCheck(toDo.id)} />
                        : <input type="checkbox" defaultChecked={!check} onChange={()=> toggleCheck(toDo.id)}    />  }
                        {toDo.id}----------{toDo.task}----------
                    </div>
                )
            }
        </div>
    )
}
