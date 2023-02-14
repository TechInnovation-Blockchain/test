import React from "react";
import Transaction from "./Transaction";
import RetailResult from "./RetailResult";

function DashBoard({ transactions, handleCalculate, result, months }) {
  return (
    <div className="dashboard">
      <button onClick={handleCalculate}> Calculate </button>
      <Transaction transactions={transactions} />
      {result && <RetailResult months={months} result={result} />}
    </div>
  );
}

export default DashBoard;
