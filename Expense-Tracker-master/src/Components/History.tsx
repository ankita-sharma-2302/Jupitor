import React, { useContext } from "react";
import { GlobalContext } from "../Context API/Context";

export const History = () => {
  const context = useContext(GlobalContext);
 
  const sign = context.options.amount < 0 ? "-" : "+";
  
  return (
    <div>
      <h2 className="tag">History</h2>
      <ul className="history">
        {context.options.map((event: any) => (
          <li
            key={context.options.id}
            className={context.options.amount < 0 ? "minus" : "plus"}
          >
            {event.text}
            <span>
              {sign}${event.amount}
            </span>
            <button
              className="delete-btn"
              onClick={() =>context.deleteHandle(context.options.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

