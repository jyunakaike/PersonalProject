import React, { useRef } from 'react'
import '@styles/finance/Expense.scss';

export const Expense = ({initialState, date, saveExpense}) => {
    const formExpense = useRef(initialState);
    
    const sendDataToFather = () =>{
        const formData = new FormData(formExpense.current)
        const data = {
            'id': '256',
            'price': formData.get('financialInput'),
            'description': 'expense',
            'type': formData.get('type'),
            'date': date
        }
        saveExpense(data)
    }
    return (
        <article className='expense' >
            <div className='expenseLine' />
            <div className='title'>
                <h1>Expenses </h1>
                <div onClick={sendDataToFather} ><h1>Guardar</h1></div>
            </div>
            <form action="/" ref={formExpense}>
                <div className='detail'>
                    Funds
                    <input type="text" className='financial-input' name='financialInput' />
                    Type
                    <input type="text" className='financial-input' name='type' />
                </div>
            </form>
        </article>
    )
}
