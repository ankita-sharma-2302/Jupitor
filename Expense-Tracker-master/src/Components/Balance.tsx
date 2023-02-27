import React, { useContext } from 'react'
import { GlobalContext } from '../Context API/Context'

export const Balance = () => {
    const context=useContext(GlobalContext)
    const amounts = context.options.map((transaction: { amount: any; }) => transaction.amount);

  const total = amounts.reduce((a: any, b: any) => (a + b), 0);
    return (
        <div className="balance">
        <h4>YOUR BALANCE</h4>
        <h2 className="total">${total}</h2> 
        </div>
    )
}
