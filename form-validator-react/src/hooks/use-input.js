// the custom hook will take "validateInput" as a param and return an object
// including properties: valIsValid, valIsNotValid, valChangeHandler, inputBlurHandler, reset
import { useState } from 'react';

const useInput = (validateInput) => {
  const [enteredVal, setEnteredVal] = useState('');
  const [errList, setErrList] = useState([]);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateInput(enteredVal).length === 0;
  const hasError = isTouched && !isValid;

  const valChangeHandler = (event) => {
    setEnteredVal(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
    const errMsg = validateInput(enteredVal);
    setErrList(errMsg);
  };

  const inputFocusHandler = () => {
    setErrList([]);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredVal('');
  };

  return {
    value: enteredVal,
    isValid,
    hasError,
    errList,
    valChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    reset,
  };
};

export default useInput;
