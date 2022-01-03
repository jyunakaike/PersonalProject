import React from 'react'
import '@styles/finance/Save.scss'

export const Save = () => {
    return (
        <article className='savingAccount' >
            <div className='savingLine' />
            <div className='title'>
                <h1>Saving Account</h1>
                <h1>***</h1>
            </div>
            <div className='detail'>
                Monto
                <div>10% 20% 30% custom</div>

                <p>Type</p>
                {/* <input type="text" className='financial-input' /> */}
                <select name="saveSelector" id='saveSelector' className='financial-input'>
                    <option value="Emergency">Emergency</option>
                    <option value="Retiro">Retiro</option>
                    <option value="Goals">Goals</option>
                </select>
            </div>
        </article>
    )
}
