import React from 'react';

const BalanceContext = React.createContext({
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
  addTrans: (trans) => {},
  removeTrans: (id) => {},
});

export default BalanceContext;
