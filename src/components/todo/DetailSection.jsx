import React from 'react'

export const DetailSection = () => {
    return (
        <section className='Detail-Container'>
            <input type="text" className='Search-input' name='TodoSearchInput' placeholder='Search' ></input>
            <div className='Divisor-Line'>------------</div>
            
            <div className='Detail-TypeTodo'>
                <div>My day</div>
                <div>Important</div>
                <div>Meeting</div>
                <div>Tasks</div>
            </div>
            
            
        </section>
    )
}
