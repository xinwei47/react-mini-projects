import ErrItem from './ErrItem';

import classes from './ErrList.module.css';

const ErrList = (props) => {
  return (
    <ul>
      {props.errData.map((err, ind) => {
        return <ErrItem key={`${err}-${ind}`}>{err}</ErrItem>;
      })}
    </ul>
  );
};

export default ErrList;
