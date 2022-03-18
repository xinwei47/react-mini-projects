import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import classes from './NewTransForm.module.css';

const NewTransForm = (props) => {
  const [transName, setTransName] = useState('');
  const [transAmt, setTransAmt] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const trans = {
      id: Math.floor(Math.random() * 100000),
      name: transName,
      amt: transAmt,
    };
    props.onNewTrans(trans);
    setTransName('');
    setTransAmt('');
  };

  const textInputHandler = (event) => {
    setTransName(event.target.value);
  };

  const amtInputHandler = (event) => {
    setTransAmt(event.target.value);
  };

  return (
    <form
      action=""
      onSubmit={formSubmitHandler}
      className={classes.newTransForm}
    >
      <FormInput
        type="text"
        placeholder="Enter text..."
        id="newTransName"
        value={transName}
        onChange={textInputHandler}
      >
        Text
      </FormInput>
      <FormInput
        type="text"
        id="newTransAmt"
        value={transAmt}
        onChange={amtInputHandler}
      >
        Amount
        <span className={classes.newTransForm__annotation}>
          (negative - expense, positive - income)
        </span>
      </FormInput>
      <div className={classes.newTransForm__actions}>
        <button className={classes.newTransForm__btn} type="submit">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default NewTransForm;
