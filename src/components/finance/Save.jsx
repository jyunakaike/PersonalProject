import React, { useRef, useState } from 'react'
import '@styles/finance/Save.scss'

export const Save = ({ initialState, fund, date, saveFunds }) => {
    const formIncome = useRef(initialState);

    const [error, setError] = useState("");

    let monto = null;
    let formValid = false;

    const percentageClick = value => () => {
        monto = fund * (value / 100);
        console.log(monto)
    }

    const percentageOnChange = value => {
        monto = value
        console.log(monto)
    }

    const validator = (monto) => {
        if (monto !== null) {
            formValid = true;
            return formValid;
        } else {
            return formValid;
        }
    }

    const sendDataToFather = () => {
        setError("");
        console.log(monto);
        validator(monto);
        if (formValid) {
            console.log("validacion correcta")
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
        else {
            console.log("validacion incorrecta")
            setError("seleccionar monto");
        }
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
                    value={monto}
                    onChange={e => percentageOnChange(e.target.value)}
                />
                <form action="/" ref={formIncome}>
                    <p>Type</p>
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

                <span style={{ color: "red" }}>
                    {error}
                </span>
            </div>
        </article>
    )
}
