import { useState, useEffect } from 'react';
import HistoryItem from './HistoryItem';

import classes from './HistoryList.module.css';

const HistoryList = (props) => {
  return (
    <ul className={classes.list}>
      {props.transactions &&
        props.transactions.map((item, ind) => {
          return (
            <HistoryItem
              text={item.name}
              amt={item.amt}
              key={`${item.name}-${ind}`}
              onClick={() => props.onClick(item.id)}
            />
          );
        })}
    </ul>
  );
};

export default HistoryList;
