import React, { useState } from 'react'
import '@styles/Finance.scss'
import InitialState from '../InitialState'
// components
import { Total } from '../components/finance/Total'
import { Income } from '../components/finance/Income';
import { Expense } from '../components/finance/Expense';
import { Save } from '../components/finance/Save';

const Finance = () => {
    const [fund, setFund] = useState(InitialState.deposit)

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fulldate = `${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`;

    // logic Total
    let IncomesTotal = 0;
    let ExpensesTotal = 0;
    let SavesTotal = 0;

    const totalIncomes = fund
        .filter(item => item.description === 'income')
        .map(item => item.price)
        .reduce((total, item) => {
            IncomesTotal = total + parseInt(item)
            return IncomesTotal
        })

    const totalExpenses = fund
        .filter(item => item.description === 'expense')
        .map(item => item.price)
        .reduce((total, item) => {
            ExpensesTotal = total + parseInt(item)
            return ExpensesTotal
        })

    const totalSaves = fund
        .filter(item => item.description === 'save')
        .map(item => item.price)
        .reduce((total, item) => {
            SavesTotal = total + parseInt(item)
            return SavesTotal
        })


    const total = IncomesTotal - ExpensesTotal -SavesTotal;


    // Incomes logic
    const guardarIncome = (dataValue) => {
        const addIncome = dataValue => {
            setFund(
                fund => [...fund, dataValue]
            )
        }
        addIncome(dataValue);
    }

    // Expense logic 
    const guardarExpense = (dataValue) => {
        const addExpense = dataValue => {
            setFund(
                fund => [...fund, dataValue]
            )
        }
        addExpense(dataValue)
    }

    // Save Logic
    const guardarFunds = (dataValue) => {
        const addSave = dataValue => {
            setFund(
                fund => [...fund, dataValue]
            )
        }
        addSave(dataValue);
    }


    return (
        <section className='finance-container'>
            {/* <h1>Finance</h1> */}
            <div className='cardsList'>
                <Total fund={fund} />
                <Income initialState={InitialState} date={fulldate} saveIncome={guardarIncome} />
                <Expense initialState={InitialState} date={fulldate} saveExpense={guardarExpense} />
                <Save initialState={InitialState} fund={total} date={fulldate} saveFunds={guardarFunds} />

                <article className='income2' >
                    <div className='incomeLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail' >
                        {
                            fund
                                .filter(fund => fund.description === 'income')
                                .map(fund =>
                                    <div key={fund.id} className='table' >{fund.price}----------{fund.date}</div>
                                )
                        }
                    </div>
                </article>

                <article className='expense2' >
                    <div className='expenseLine' />
                    <div className='title'>
                        <h1>Monton de datos</h1>
                    </div>
                    <div className='detail'  >
                        {
                            fund
                                .filter(fund => fund.description === 'expense')
                                .map(fund =>
                                    <div key={fund.id} className='table'>{fund.price}----------{fund.date}</div>
                                )
                        }

                    </div>
                </article>

                <article className='savingAccount2' >
                    <div className='savingLine' />

                    {/* <div className='title-save'>
                        <h1>Emergencies( the value of 3 or 6 month of salary)</h1>
                        <h1>Retiro ()</h1>
                        <h1>Goals </h1>
                    </div> */}
                    <div className='title-save'>
                        <div className='detail'>
                            total Saves:
                            {
                                totalSaves
                            }
                            {
                                fund
                                    .filter(fund => fund.description === 'save')
                                    .map(fund =>
                                        <div key={fund.id} className='table'>{fund.price}----------{fund.date}----------{fund.type}</div>
                                    )
                            }

                        </div>

                    </div>

                    {/* <div className='detail'>
                        <h2>tablas</h2>
                    </div> */}
                </article>
            </div>
        </section>
    )
}

export default Finance
