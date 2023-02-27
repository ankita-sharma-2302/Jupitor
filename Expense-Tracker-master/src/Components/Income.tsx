import React, { useContext } from 'react'
import { GlobalContext } from '../Context API/Context'

export const Income = () => {
  const context = useContext(GlobalContext)
  console.log("aaaa",context.options.amount)
  const amount = context.options.map((event: { amount: any; }) => event.amount);

  const income = amount
    .filter((item: number) => item > 0)
    .reduce((a: any, b: any) => (a + b), 0);

  const expense = (
    amount.filter((item: number) => item < 0).reduce((a: any, b: any) => (a + b), 0) *-1
  ).toFixed(2);
    return (
        <div className="income">
        <div className="income1">
          <h3>INCOME</h3>
          <h5 className="money plus">+${income}</h5>
        </div>
        <div className="income2">
          <h3>EXPENSE</h3>
          <h5 className="money minus">-${expense}</h5>
        </div>
      </div>
    )
}
