import React from 'react'
import '@styles/finance/Total.scss'

export const Total = ({ fund }) => {
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

    const total = IncomesTotal - ExpensesTotal -totalSaves;

    return (
        <article className='total'>
            <div className='total-detail'>
                <div className='totalLine' />
                <div className='title'>
                    <h1>total</h1>
                    <h1>***</h1>
                </div>
                <div className='detail'>
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
                        total Saves :
                        {totalSaves}
                    </div>


                    <div>
                        totals:
                        {total}
                    </div>
                </div>
            </div>
            {/* <div className='total-period'>
                        <div>dayly</div>
                        <div>weekly</div>
                        <div>monthly</div>
                    </div>  */}
        </article>
    )
}
