import React from 'react'
import '@styles/Finance.scss'
import InitialState from '../InitialState'


const Finance = () => {
    const gains = InitialState.gains
    // const spends = InitialState.spends

    // let total = 0;
    let gainTotal = 0;
    let spendTotal = 0;
    
    const totalGains = gains
            .filter(gain => gain.description === 'gain')
            .map( gain => gain.price)
            .reduce((total, gain)=> {
                gainTotal= total + gain
                return gainTotal
            } )
    
    const totalSpends= gains
            .filter(gain => gain.description === 'spend')
            .map( gain => gain.price)
            .reduce((total, gain)=> { 
                spendTotal = total + gain
                return spendTotal } )

    const total= gainTotal - spendTotal;

    return (
        <div className='finance-container'>
            <h1>Finance</h1>
            <div className='cardsList'>
                <div className='total'>

                    <div className='total-detail'>
                        {/* <div className='totalLine' /> */}
                        <div className='title'>
                            <h1>total</h1>
                            <h1>***</h1>
                        </div>
                        <div className='detail'>
                            {/* <input type="text" /> */}
                            <h1>Mostrar datos</h1>

                            <div>
                                total gains :
                                { totalGains }
                                
                            </div>
                            <div>
                                total spends : 
                                { totalSpends }
                            </div>

                            <div>
                                totals:{ total }
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
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>Monto</h2>
                        <input type="text" className='financial-input' />

                        tipo de ganancia
                        <input type="text" className='financial-input' />
                    </div>
                </div>

                <div className='spend' >
                    <div className='spendLine' />
                    <div className='title'>
                        <h1>Spends </h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>Monto</h2>
                        <input type="text" className='financial-input' />
                        tipo de Gasto
                        <input type="text" className='financial-input' />
                    </div>
                </div>

                <div className='savingAccount' >
                    <div className='savingLine' />
                    <div className='title'>
                        <h1>Saving Account</h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>Monto</h2>
                        <input type="text" className='financial-input' />
                        tipo de Gasto
                        <input type="text" className='financial-input' />
                    </div>
                </div>

                <div className='gain2' >
                    <div className='gainLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail' >
                        {/* {gains.map(gain => 
                        <div>
                            {gain.price} $
                        </div>
                            
                        )} */}
                        {
                            gains
                                .filter(gain => gain.description === 'gain')
                                .map(gain =>
                                    <div>{gain.price}</div>
                                )
                        }

                    </div>
                </div>

                <div className='spend2' >
                    <div className='spendLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail' >
                        {
                            gains
                                .filter(gain => gain.description === 'spend')
                                .map(gain =>
                                    <div>{gain.price}</div>
                                )
                        }

                    </div>
                </div>

                <div className='savingAccount2' >
                    <div className='savingLine' />

                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'>
                        <h2>tablas</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Finance
