import React, { useState, useRef } from 'react'
import '@styles/Finance.scss'
import InitialState from '../InitialState'


const Finance = () => {
    // const gains = InitialState.gains


    const [gain, setGain] = useState(InitialState.gains)

    // for total
    let gainTotal = 0;
    let spendTotal = 0;
    const totalGains = gain
        .filter(gain => gain.description === 'gain')
        .map(gain => gain.price)
        .reduce((total, gain) => {
            gainTotal = total + gain
            return gainTotal
        })

    const totalSpends = gain
        .filter(gain => gain.description === 'spend')
        .map(gain => gain.price)
        .reduce((total, gain) => {
            spendTotal = total + gain
            return spendTotal
        })

    const total = gainTotal - spendTotal;

    // gain logic
    // form gain
    const formGain = useRef(InitialState);
    // for gain
    const guardarGain = () => {
        const formData = new FormData(formGain.current)
        const data = {
            'id': '29',
            'price': formData.get('financialInput'),
            'description': 'gain',
            'type': formData.get('type'),
        }
        const addGain = data => {
            setGain(
                gain => [...gain, data]
            )
        }
        addGain(data)
    }

    // spend logic 
    // form spend
    const formSpend = useRef(InitialState);
    // 
    const guardarSpend = () => {
        const formData = new FormData(formSpend.current)
        const data = {
            'id': '256',
            'price': formData.get('financialInput'),
            'description': 'spend',
            'type': formData.get('type'),
        }
        const addSpend = data => {
            setGain(
                gain => [...gain, data]
            )
        }
        console.log(data)
        addSpend(data)
    }


    return (
        <div className='finance-container'>
            <h1>Finance</h1>
            <div className='cardsList'>
                <div className='total'>

                    <div className='total-detail'>
                        <div className='totalLine' />
                        <div className='title'>
                            <h1>total</h1>
                            <h1>***</h1>
                        </div>
                        <div className='detail'>
                            <input type="text" />
                            <h1>Mostrar datos</h1>

                            <div>
                                total gains :
                                {totalGains}

                            </div>
                            <div>
                                total spends :
                                {totalSpends}
                            </div>

                            <div>
                                totals:{total}
                            </div>
                        </div>
                    </div>

                    <div className='total-period'>
                        <div>dayly</div>
                        <div>weekly</div>
                        <div>monthly</div>
                    </div>
                </div>

                <div className='gain' >
                    <div className='gainLine' />
                    <div className='title'>
                        <h1>Gains</h1>

                        <div onClick={guardarGain} ><h1>Guardar</h1></div>
                    </div>
                    <form action="/" ref={formGain}>
                        <div className='detail'>
                            salary
                            <input type="text" className='financial-input' name='financialInput' />

                            tipo de ganancia
                            {/* <input type="text" className='financial-input' /> */}
                            <select name='gainSelector' id='gainSelector' className='financial-input' name='type'>
                                <option value="salary">salary</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className='spend' >
                    <div className='spendLine' />
                    <div className='title'>
                        <h1>Spends </h1>
                        {/* <h1>***</h1> */}
                        <div onClick={guardarSpend} ><h1>Guardar</h1></div>
                    </div>
                    <form action="/" ref={formSpend}>
                        <div className='detail'>
                            Monto
                            <input type="text" className='financial-input' name='financialInput'/>
                            tipo de Gasto
                            <input type="text" className='financial-input' name='type'/>
                        </div>
                    </form>
                </div>

                <div className='savingAccount' >
                    <div className='savingLine' />
                    <div className='title'>
                        <h1>Saving Account</h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        Monto
                        <div>10% 20% 30% custom</div>

                        <p>tipo de ahorro</p>
                        {/* <input type="text" className='financial-input' /> */}
                        <select name="saveSelector" id='saveSelector' className='financial-input'>
                            <option value="Emergency">Emergency</option>
                            <option value="Retiro">Retiro</option>
                            <option value="Goals">Goals</option>
                        </select>
                    </div>
                </div>

                <div className='gain2' >
                    <div className='gainLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail' >
                        {
                            gain
                                .filter(gain => gain.description === 'gain')
                                .map(gain =>
                                    <div key={gain.id} >{gain.price}</div>
                                )
                        }
                    </div>
                </div>

                <div className='spend2' >
                    <div className='spendLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'  >
                        {
                            gain
                                .filter(gain => gain.description === 'spend')
                                .map(gain =>
                                    <div key={gain.id}>{gain.price}</div>
                                )
                        }

                    </div>
                </div>

                <div className='savingAccount2' >
                    <div className='savingLine' />

                    <div className='title-save'>
                        <h1>Emergencies( the value of 3 or 6 month of salary)</h1>
                        <h1>Retiro ()</h1>
                        <h1>Goals </h1>



                    </div>
                    {/* <div className='detail'>
                        <h2>tablas</h2>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Finance
