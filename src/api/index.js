/* DB represents all transactions from Dec 2022 to Feb 2023 */
const DB = {
  transactions: [
    {
      id: 1,
      month: "Dec 2022",
      amount: 120,
      customerId: 1,
    },
    {
      id: 2,
      month: "Feb 2023",
      amount: 320,
      customerId: 3,
    },
    {
      id: 3,
      month: "Dec 2022",
      amount: 70,
      customerId: 4,
    },
    {
      id: 4,
      month: "Jan 2023",
      amount: 20,
      customerId: 1,
    },
    {
      id: 5,
      month: "Jan 2023",
      amount: 132,
      customerId: 2,
    },
    {
      id: 6,
      month: "Feb 2023",
      amount: 67,
      customerId: 3,
    },
    {
      id: 7,
      month: "Jan 2023",
      amount: 127,
      customerId: 1,
    },
    {
      id: 8,
      month: "Dec 2022",
      amount: 121,
      customerId: 4,
    },
    {
      id: 9,
      month: "Dec 2022",
      amount: 133,
      customerId: 1,
    },
    {
      id: 10,
      month: "Jan 2023",
      amount: 89,
      customerId: 2,
    },
    {
      id: 11,
      month: "Jan 2023",
      amount: 90,
      customerId: 3,
    },
    {
      id: 12,
      month: "Dec 2022",
      amount: 77,
      customerId: 1,
    },
    {
      id: 13,
      month: "Feb 2023",
      amount: 50,
      customerId: 2,
    },
    {
      id: 14,
      month: "Dec 2022",
      amount: 51,
      customerId: 3,
    },
    {
      id: 15,
      month: "Dec 2022",
      amount: 120,
      customerId: 4,
    },
    {
      id: 16,
      month: "Jan 2023",
      amount: 111,
      customerId: 1,
    },
  ],
  customers: [
    {
      id: 1,
      name: "Tony",
    },
    {
      id: 2,
      name: "James",
    },
    {
      id: 3,
      name: "Jack",
    },
    {
      id: 4,
      name: "Katie",
    },
  ],
};

export const fetchTransaction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DB.transactions);
    }, Math.random() * 2000 + 1000);
  });
};

export const fetchCustomer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DB.customers);
    }, Math.random() * 2000 + 1000);
  });
};
