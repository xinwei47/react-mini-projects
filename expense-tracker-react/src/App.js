import { useContext } from 'react';
import classes from './App.module.css';
import Balance from './components/Balance/Balance';
import NewTransForm from './components/Form/NewTransForm';
import HistoryList from './components/History/HistoryList';
import StatsSummary from './components/StatsSummary/StatsSummary';

import BalanceContext from './components/Store/balance-context';

function App() {
  const balanceCtx = useContext(BalanceContext);

  const removeTransHandler = (transId) => {
    balanceCtx.removeTrans(transId);
  };

  const addTransHandler = (data) => {
    balanceCtx.addTrans(data);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Expense Tracker</h1>

      <section className={classes.summary}>
        <Balance balance={`$${balanceCtx.balance}`} />
        <StatsSummary income={balanceCtx.income} expense={balanceCtx.expense} />
      </section>

      <section className={classes.history}>
        <h2>History</h2>
        <HistoryList
          transactions={balanceCtx.transactions}
          onClick={removeTransHandler}
        />
      </section>

      <section className={classes.addTrans}>
        <h2>Add new transaction</h2>
        <NewTransForm onNewTrans={addTransHandler} />
      </section>
    </div>
  );
}

export default App;

// *******************************************************************
// *******************************************************************
// *******************************************************************
// import { useCallback, useEffect, useState } from 'react';
// import classes from './App.module.css';
// import Balance from './components/Balance/Balance';
// import NewTransForm from './components/Form/NewTransForm';
// import HistoryList from './components/History/HistoryList';
// import StatsSummary from './components/StatsSummary/StatsSummary';

// function App() {
//   const [transactionsData, setTransactionsData] = useState([]);
//   const [balance, setBalance] = useState(0);
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);

//   // using useCallback() to avoid function re-rendering when the function is an dependency of useEffect
//   // getLocalStorage() always returns the same function object
//   const getLocalStorage = useCallback(() => {
//     return JSON.parse(localStorage.getItem('transactions'));
//   }, []);

//   const updateLocalStorage = (data) => {
//     return localStorage.setItem('transactions', JSON.stringify(data));
//   };

//   useEffect(() => {
//     const data = getLocalStorage();
//     setTransactionsData(data);
//   }, [getLocalStorage]);

//   useEffect(() => {
//     statsUpdate(transactionsData);
//     updateLocalStorage(transactionsData);
//   }, [transactionsData]);

//   const statsUpdate = (data) => {
//     const balance = data.reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
//     const income = data
//       .filter((item) => item.amt > 0)
//       .reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
//     const expense = data
//       .filter((item) => item.amt < 0)
//       .reduce((sum, cur) => sum + parseFloat(cur.amt), 0);
//     setBalance(balance.toFixed(2));
//     setIncome(income.toFixed(2));
//     setExpense(expense.toFixed(2));
//   };

//   const removeTransHandler = (transId) => {
//     setTransactionsData((prevState) => {
//       return prevState.filter((item) => item.id !== transId);
//     });
//   };

//   const addTransHandler = (data) => {
//     setTransactionsData((prevState) => [...prevState, data]);
//   };

//   return (
//     <div className={classes.container}>
//       <h1 className={classes.heading}>Expense Tracker</h1>

//       <section className={classes.summary}>
//         <Balance balance={`$${balance}`} />
//         <StatsSummary income={income} expense={expense} />
//       </section>

//       <section className={classes.history}>
//         <h2>History</h2>
//         <HistoryList
//           transactions={transactionsData}
//           onClick={removeTransHandler}
//         />
//       </section>

//       <section className={classes.addTrans}>
//         <h2>Add new transaction</h2>
//         <NewTransForm onNewTrans={addTransHandler} />
//       </section>
//     </div>
//   );
// }

// export default App;
