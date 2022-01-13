import React from 'react'

export const DetailSection = ({search, setSearch }) => {
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    return (
        <section className='Detail-Container'>
            <input type="text" 
                className='Search-input' 
                name='TodoSearchInput' 
                placeholder='Search'
                value={search}
                onChange={onSearchValueChange}
            ></input>
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
