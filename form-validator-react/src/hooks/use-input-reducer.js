import { useReducer } from 'react';

const defaultState = {
  value: '',
  isTouched: false,
  errList: [],
};

const inputReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return { ...prevState, value: action.value };
  }
  if (action.type === 'INPUT_FOCUS') {
    return { ...prevState, isTouched: true, errList: [] };
  }
  if (action.type === 'INPUT_BLUR') {
    return { ...prevState, isTouched: true, errList: [...action.payload] };
  }
  return defaultState;
};

const useInputReducer = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputReducer, defaultState);

  const isValid = validateInput(inputState.value).length === 0;
  const hasError = inputState.isTouched && !isValid;

  const valChangeHandler = (event) => {
    dispatch({ type: 'USER_INPUT', value: event.target.value });
  };

  const inputFocusHandler = () => {
    dispatch({ type: 'INPUT__FOCUS' });
  };

  const inputBlurHandler = () => {
    const errMsg = validateInput(inputState.value);
    dispatch({ type: 'INPUT_BLUR', payload: errMsg });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    errList: inputState.errList,
    valChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    reset,
  };
};

export default useInputReducer;
