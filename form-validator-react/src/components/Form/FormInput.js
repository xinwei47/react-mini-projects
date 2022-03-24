import React from 'react';
import classes from './FormInput.module.css';

// const FormInput = React.forwardRef((props, ref) => {
const FormInput = (props) => {
  return (
    <div className={classes['form-input']}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.className}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        // ref={ref}
        value={props.value}
      />
    </div>
  );
};

export default FormInput;
