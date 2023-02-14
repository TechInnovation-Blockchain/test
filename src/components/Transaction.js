import React from "react";

function Transaction({ transactions }) {
  if (!transactions || !transactions.length) return null;

  return (
    <div className="transactions-table">
      <table>
        <thead>
          <tr>
            <td>Customer</td>
            <td>Month</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => {
            return (
              <tr key={t.id}>
                <td>{t.customer}</td>
                <td>{t.month}</td>
                <td>{t.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
