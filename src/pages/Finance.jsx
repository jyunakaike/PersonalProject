import React, { useState, useRef } from 'react'
import '@styles/Finance.scss'
import InitialState from '../InitialState'


const Finance = () => {
    const [fund, setFund] = useState(InitialState.deposit)

    // for total
    let IncomesTotal = 0;
    let ExpensesTotal = 0;
    const totalIncomes = fund
        .filter(item => item.description === 'income')
        .map(item => item.price)
        .reduce((total, item) => {
            IncomesTotal = total +  parseInt(item)
            return IncomesTotal
        })

    const totalExpenses = fund
        .filter(item => item.description === 'expense')
        .map(item => item.price)
        .reduce((total, item) => {
            ExpensesTotal = total + parseInt(item)
            return ExpensesTotal
        })

    const total = IncomesTotal - ExpensesTotal;

    // Incomes logic
    // form Incomes
    const formIncome = useRef(InitialState);
    
    const guardarIncome = () => {
        const formData = new FormData(formIncome.current)
        const data = {
            'id': '29',
            'price': formData.get('financialInput'),
            'description': 'income',
            'type': formData.get('type'),
        }
        const addIncome = data => {
            setFund(
                fund => [...fund, data]
            )
        }
        console.log(data)
        addIncome(data)
    }

    // Expense logic 
    // form Expense
    const formExpense = useRef(InitialState);
    // 
    const guardarExpense = () => {
        const formData = new FormData(formExpense.current)
        const data = {
            'id': '256',
            'price': formData.get('financialInput'),
            'description': 'expense',
            'type': formData.get('type'),
        }
        const addExpense = data => {
            setFund(
                fund => [...fund, data]
            )
        }
        console.log(data)
        addExpense(data)
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
                                total Incomes :
                                {totalIncomes}

                            </div>
                            <div>
                                total Expenses :
                                {totalExpenses}
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

                <div className='income' >
                    <div className='incomeLine' />
                    <div className='title'>
                        <h1>Incomes</h1>

                        <div onClick={guardarIncome} ><h1>Guardar</h1></div>
                    </div>
                    <form action="/" ref={formIncome}>
                        <div className='detail'>
                            Funds
                            <input type="text" className='financial-input' name='financialInput' />
                            Type
                            {/* <input type="text" className='financial-input' /> */}
                            <select name='IncomeSelector' id='IncomeSelector' className='financial-input' name='type'>
                                <option value="salary">salary</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className='expense' >
                    <div className='expenseLine' />
                    <div className='title'>
                        <h1>Expenses </h1>
                        {/* <h1>***</h1> */}
                        <div onClick={guardarExpense} ><h1>Guardar</h1></div>
                    </div>
                    <form action="/" ref={formExpense}>
                        <div className='detail'>
                            Funds
                            <input type="text" className='financial-input' name='financialInput'/>
                            Type
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

                        <p>Type</p>
                        {/* <input type="text" className='financial-input' /> */}
                        <select name="saveSelector" id='saveSelector' className='financial-input'>
                            <option value="Emergency">Emergency</option>
                            <option value="Retiro">Retiro</option>
                            <option value="Goals">Goals</option>
                        </select>
                    </div>
                </div>

                <div className='income2' >
                    <div className='incomeLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail' >
                        {
                            fund
                                .filter(fund => fund.description === 'income')
                                .map(fund =>
                                    <div key={fund.id} >{fund.price}</div>
                                )
                        }
                    </div>
                </div>

                <div className='expense2' >
                    <div className='expenseLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'  >
                        {
                            fund
                                .filter(fund => fund.description === 'expense')
                                .map(fund =>
                                    <div key={fund.id}>{fund.price}</div>
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
