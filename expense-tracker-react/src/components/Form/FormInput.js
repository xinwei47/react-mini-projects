import classes from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div
      className={`${classes['form-group']} ${
        props.FormGroupClassName ? props.FormGroupClassName : ''
      }`}
    >
      <label
        className={`${classes.label} ${props.labelClassName}`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder ? props.placeholder : ''}
        id={props.id}
        className={`${classes.input} ${
          props.inputClassName ? props.inputClassName : ''
        }`}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
