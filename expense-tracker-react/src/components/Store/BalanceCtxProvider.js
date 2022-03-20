import { useCallback, useEffect, useState } from 'react';
import BalanceContext from './balance-context';

const BalanceCtxProvider = (props) => {
  const transactionsData = localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : [];

  const [transactions, setTransactions] = useState(transactionsData);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const getLocalStorageData = useCallback((key) => {
    return JSON.parse(localStorage.getItem(key));
  }, []);

  const setLocalStorageData = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
  };

  useEffect(() => {
    setLocalStorageData('transactions', transactions);
    statsUpdate(transactions);
  }, [transactions]);

  useEffect(() => {
    const data = getLocalStorageData('transactions');
    setTransactions(data);
  }, [getLocalStorageData]);

  const statsUpdate = (data) => {
    const balance = data.reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
    const income = data
      .filter((item) => item.amt > 0)
      .reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
    const expense = data
      .filter((item) => item.amt < 0)
      .reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
    setBalance(balance.toFixed(2));
    setIncome(income.toFixed(2));
    setExpense(expense.toFixed(2));
  };

  const addTransHandler = (trans) => {
    setTransactions((prevState) => [...prevState, trans]);
  };

  const removeTransHandler = (id) => {
    setTransactions((prevState) => prevState.filter((item) => item.id !== id));
  };

  const balanceCtxValue = {
    transactions,
    balance,
    income,
    expense,
    addTrans: addTransHandler,
    removeTrans: removeTransHandler,
  };

  return (
    <BalanceContext.Provider value={balanceCtxValue}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceCtxProvider;
