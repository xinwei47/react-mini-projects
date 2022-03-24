import React from 'react';
import classes from './Popup.module.css';

const Popup = React.forwardRef((props, ref) => {
  return (
    <div className={classes['popup-box']} onClick={props.onClick}>
      <div ref={ref} className={classes.popup}>
        {props.children}
      </div>
    </div>
  );
});

export default Popup;
