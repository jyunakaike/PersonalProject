import React from 'react'
import '@styles/Finance.scss'

const Finance = () => {
    return (
        <div className='finance-container'>
            <h1>Finance</h1>

            <div className='cardsList'>
                <div className='total'>
                    <div className='totalLine' />
                    <div className='title'>
                        <h1>total</h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        {/* <input type="text" /> */}
                        <h1>Mostrar datos</h1>
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
                        <input type="text" />
                        tipo de Gasto
                        <input type="text" />
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
                        <input type="text" />
                        tipo de Gasto
                        <input type="text" />
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
                        <input type="text" />
                        tipo de Gasto
                        <input type="text" />
                    </div>
                </div>

                <div className='gain2' >
                    <div className='gainLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'>
                        <h2>Tabla </h2>
                    </div>
                </div>

                <div className='spend2' >
                    <div className='spendLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'>
                        <h2>tabla</h2>
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
