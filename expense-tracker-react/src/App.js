import './App.css';
import Balance from './components/Balance/Balance';
import NewTransForm from './components/Form/NewTransForm';
import HistoryList from './components/History/HistoryList';
import StatsSummary from './components/StatsSummary/StatsSummary';

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <section className="summary">
        <Balance />
        <StatsSummary />
      </section>

      <section>
        <h2>History</h2>
        <HistoryList transactions={[1, 2, 3]} />
      </section>

      <section>
        <h2>Add new transaction</h2>
        <NewTransForm />
      </section>
    </div>
  );
}

export default App;
