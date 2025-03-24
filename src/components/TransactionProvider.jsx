import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: "LDRSF02241", name: "Citra", count: 1, color: "bg-green-400" },
    { id: "LDRSF02242", name: "Adrian", count: 4, color: "bg-red-300" },
    { id: "LDRSF02243", name: "Diana", count: 10, color: "bg-green-400" },
    { id: "LDRSF02244", name: "Adriana", count: 7, color: "bg-red-300" },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
