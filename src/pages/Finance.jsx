import React from 'react'
import '@styles/Finance.scss'

const Finance = () => {
    return (
        <div className='finance-container'>
            <div className='financeList'>
                <div className='gain' >
                    <div className='title'>
                        <h1>Gains</h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>Tabla </h2>
                    </div>


                </div>
                <div className='spend' >
                    <div className='title'>
                        <h1>Spends </h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>tabla</h2>
                    </div>
                </div>
                <div className='savingAccount' >
                    <div className='title'>
                        <h1>Saving Account</h1>
                        <h1>***</h1>
                    </div>
                    <div className='detail'>
                        <h2>monton de contenidos</h2>
                    </div>
                </div>
            </div>
            <div className='financeHistorial' >
                <div className='historialBox'>
                    un historial
                </div>
            </div>
        </div>
    )
}

export default Finance
