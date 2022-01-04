import React, { useRef } from 'react'
import '@styles/finance/Save.scss'

export const Save = ({ initialState, fund, date, saveFunds }) => {
    const formIncome = useRef(initialState);

    let custom = 0;
    let monto = null;

    const percentageClick = value => () => {
        monto = fund * (value / 100);
        console.log(monto)
        // console.log(fund)
        // console.log(fund *monto)
    }

    const sendDataToFather = () => {
        // console.log(monto)
        // console.log(date)
        // console.log(initialState)

        const formData = new FormData(formIncome.current)
        const data = {
            'id': '29',
            'price': monto,
            'description': 'save',
            'type': formData.get('type'),
            'date': date
        }
        console.log(data);
        saveFunds(data);
    }

    return (
        <article className='savingAccount' >
            <div className='savingLine' />
            <div className='title'>
                <h1>Saving Account</h1>
                <h1 onClick={sendDataToFather} >Guardar</h1>
            </div>
            <div className='detail'>
                Monto
                <div className="percentages" >
                    <button
                        className="percentage"
                        value="5"
                        onClick={percentageClick(10)}
                    >
                        10%
                    </button>
                    <button
                        className="percentage"
                        value="10"
                        onClick={percentageClick(20)}
                    >
                        20%
                    </button>
                    <button
                        className="percentage"
                        value="15"
                        onClick={percentageClick(30)}
                    >
                        30%
                    </button>
                </div>
                <input
                    className="custom"
                    id="input"
                    type="number"
                    min="0"
                    placeholder="Custom"
                // onChange={percentageClick()}
                />
                <form action="/" ref={formIncome}>
                    <p>Type</p>
                    {/* <input type="text" className='financial-input' /> */}
                    <select
                        name="type"
                        id='saveSelector'
                        className='financial-input'
                    >
                        <option value="Emergency">Emergency</option>
                        <option value="Retiro">Retiro</option>
                        <option value="Goals">Goals</option>
                    </select>
                </form>
            </div>
        </article>
    )
}
