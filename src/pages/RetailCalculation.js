import React, { useState, useEffect } from "react";
import { fetchCustomer, fetchTransaction } from "./../api";
import DashBoard from "../components/DashBoard";

function RetailCalculation() {
  const [transactions, setTransactions] = useState();
  const [loading, setLoading] = useState(false);
  const [months, setMonths] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    // fetch Data
    setLoading(true);
    Promise.all([fetchCustomer(), fetchTransaction()]).then(
      ([customer, transaction]) => {
        const customerMap = customer.reduce((prev, cur) => {
          return {
            ...prev,
            [cur.id]: cur.name,
          };
        }, {});

        setTransactions(
          transaction.map((tran) => {
            return {
              ...tran,
              customer: customerMap[tran.customerId],
            };
          })
        );
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }

  const calculateRetail = (amountArr) => {
    return amountArr
      ? amountArr.reduce((prev, cur) => {
          let res = 0;
          if (cur > 100) res += (cur - 100) * 2;
          if (cur > 50) res += cur - 50;
          return res + prev;
        }, 0)
      : 0;
  };

  const calculate = () => {
    const months = [];
    const customers = {};
    const data = {};
    for (let i = 0; i < transactions.length; i++) {
      const t = transactions[i];
      const key = t.customerId + t.month;
      if (!months.includes(t.month)) months.push(t.month);
      if (!customers[t.customerId]) customers[t.customerId] = t.customer;
      if (data[key]) {
        data[key].push(t.amount);
      } else {
        data[key] = [t.amount];
      }
    }
    const res = [];
    const customerIds = Object.keys(customers);
    for (let i = 0; i < customerIds.length; i++) {
      const resByCustomer = {
        customerId: customerIds[i],
        name: customers[customerIds[i]],
      };
      let total = 0;
      months.forEach((month) => {
        resByCustomer[month] = calculateRetail(data[customerIds[i] + month]);
        total += resByCustomer[month];
      });
      resByCustomer.totalRetail = total;
      res.push(resByCustomer);
    }

    setMonths(months);
    setResult(res);
  };

  return (
    <DashBoard
      transactions={transactions}
      handleCalculate={calculate}
      result={result}
      months={months}
    />
  );
}

export default RetailCalculation;
