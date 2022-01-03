import React, {useRef} from 'react';
import '@styles/finance/Income.scss';

export const Income = ({initialState, date, saveIncome }) => {
    const formIncome = useRef(initialState);
    const sendDataToFather = ()=>{
        const formData = new FormData(formIncome.current)
        const data = {
                'id': '29',
                'price': formData.get('financialInput'),
                'description': 'income',
                'type': formData.get('type'),
                'date': date
            }
        saveIncome(data)
    }
    return (
        <article className='income' >
            <div className='incomeLine' />
            <div className='title'>
                <h1>Incomes</h1>
                <div onClick={sendDataToFather} ><h1>Guardar</h1></div>
            </div>
            <form action="/" ref={formIncome}>
                <div className='detail'>
                    Funds
                    <input type="text" className='financial-input' name='financialInput' />
                    Type
                    <select name='IncomeSelector' id='IncomeSelector' className='financial-input' name='type'>
                        <option value="salary">salary</option>
                    </select>
                </div>
            </form>
        </article>
    )
}
