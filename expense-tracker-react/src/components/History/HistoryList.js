import HistoryItem from './HistoryItem';

const HistoryList = (props) => {
  return (
    <ul>
      {props.transactions.map((item) => {
        return <HistoryItem />;
      })}
    </ul>
  );
};

export default HistoryList;
