import React from "react";

function RetailResult({ result, months }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Customer Id</td>
          <td>Customer</td>
          {months.map((month) => {
            return <td key={month}>{month}</td>;
          })}
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => {
          return (
            <tr key={res.customerId}>
              <td>{res.customerId}</td>
              <td>{res.name}</td>
              {months.map((month) => {
                return <td key={month}>{res[month]}</td>;
              })}
              <td>{res.totalRetail}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RetailResult;
