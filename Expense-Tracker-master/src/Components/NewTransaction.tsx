import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context API/Context";

export const NewTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<any>(0);


  const context=useContext(GlobalContext)
  console.log(context)
  const { editHandle }= useContext(GlobalContext)

  const onSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    const newValue={
      id: new Date().getTime().toString() ,text ,amount
    }
    editHandle(newValue);
    console.log("oooooo",newValue)
  }

  return (
    <div className="main">
      <h2 className="tag">Add New Transaction</h2>
      <form onSubmit={onSubmit}> 
        <div className="transaction">
          <label htmlFor="text" className="label">
            Text
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="transaction">
          <label htmlFor="amount" className="label">
            Amount <br />
            (Negative-Expense,Positive-Income)
          </label>
          <input
            className="input"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="button">Add Transaction</button>
      </form>
    </div>
  );
};


