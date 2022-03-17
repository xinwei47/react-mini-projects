import { useState } from 'react';
import FormInput from './FormInput';

const NewTransForm = () => {
  const [transName, setTransName] = useState('');
  const [transAmt, setTransAmt] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(transName);
    console.log(transAmt);
  };

  const textInputHandler = (event) => {
    setTransName(event.target.value);
  };

  const amtInputHandler = (event) => {
    setTransAmt(event.target.value);
  };

  return (
    <form action="" onSubmit={formSubmitHandler}>
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
        <span>(negative - expense, positive - income)</span>
      </FormInput>
      <FormInput
        type="button"
        id="newTransSubmit"
        value="Add Transaction"
      ></FormInput>
    </form>
  );
};

export default NewTransForm;
