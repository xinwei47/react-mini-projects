import { useRef, useState } from 'react';
import FormInput from './FormInput';
// import useInput from '../../hooks/use-input';
import useInputReducer from '../../hooks/use-input-reducer';
import classes from './Form.module.css';
import ErrList from './ErrList';
import Button from '../UI/Button';
import Popup from '../UI/Popup';

const validateUsername = (username) => {
  if (username.trim() === '') {
    return ['Username cannot be empty.'];
  } else if (/[^a-z0-9]/.test(username)) {
    return ['Username can only include letters and numbers.'];
  }
  return [];
};

const validateEmail = (email) => {
  if (email.trim() === '') {
    return ['Email cannot be empty.'];
  } else if (
    !email.includes('.com') ||
    !email.includes('@') ||
    email.includes(' ')
  ) {
    return ['Email address is not valid.'];
  } else {
    return [];
  }
};

const validatePwd = (pwd) => {
  // password must include letters (both lowercase and uppercase), numbers, and symbols
  const pwdVal = pwd.trim();
  if (pwdVal === '') {
    return ['Password cannot be empty.'];
  } else {
    const errList = [];
    if (pwdVal.length < 8) {
      errList.push('Password must be at least 8 characters.');
    }
    if (!/[a-z]/.test(pwdVal)) {
      errList.push('Password must include lowercase letters a-z.');
    }
    if (!/[A-Z]/.test(pwdVal)) {
      errList.push('Password must include uppercase letters A-Z.');
    }
    if (!/[\d]/.test(pwdVal)) {
      errList.push('Password must include numbers 0-9.');
    }
    return errList;
  }
};

const Form = () => {
  const {
    value: usernameVal,
    isValid: usernameIsValid,
    hasError: usernameHasErr,
    errList: usernameErr,
    valChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    inputFocusHandler: usernameFocusHandler,
    reset: usernameReset,
    // } = useInput(validateUsername);
  } = useInputReducer(validateUsername);

  const {
    value: emailVal,
    isValid: emailIsValid,
    hasError: emailHasErr,
    errList: emailErr,
    valChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
    reset: emailReset,
    // } = useInput(validateEmail);
  } = useInputReducer(validateEmail);

  const {
    value: pwdVal,
    isValid: pwdIsValid,
    hasError: pwdHasErr,
    errList: pwdErr,
    valChangeHandler: pwdChangeHandler,
    inputBlurHandler: pwdBlurHandler,
    inputFocusHandler: pwdFocusHandler,
    reset: pwdReset,
    // } = useInput(validatePwd);
  } = useInputReducer(validatePwd);

  // ******************************
  // validate pwd2 cannot used the useInput hook
  // because it needs to compare with the password value
  const [pwd2Err, setPwd2Err] = useState([]);
  const [pwd2Val, setPwd2Val] = useState('');
  const [pwd2IsTouched, setPwd2IsTouched] = useState(false);

  const pwd2IsValid = pwd2IsTouched && pwd2Err.length === 0;
  const pwd2HasErr = pwd2IsTouched && !pwd2IsValid;

  const pwd2ChangeHandler = (event) => {
    setPwd2Val(event.target.value);
    setPwd2IsTouched(true);
  };

  const pwd2BlurHandler = () => {
    setPwd2IsTouched(true);
    return validatePwd2(pwd2Val);
  };

  const pwd2OnFocusHandler = () => {
    setPwd2Err([]);
  };

  const pwd2Reset = () => {
    setPwd2IsTouched(false);
    setPwd2Val('');
  };

  const validatePwd2 = (pwd2) => {
    if (pwd2 === '') {
      setPwd2Err(['Password cannot be empty.']);
      return;
    } else if (pwd2 !== pwdVal) {
      setPwd2Err(["Password doesn't match."]);
      return;
    } else {
      setPwd2Err([]);
      return;
    }
  };
  // ******************************
  const [showPopup, setShowPopup] = useState(false);
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (usernameIsValid && emailIsValid && pwdIsValid && pwd2IsValid) {
      setShowPopup(true);
    }

    usernameReset();
    emailReset();
    pwdReset();
    pwd2Reset();
  };

  const popupRef = useRef();
  const closePopupHandler = (event) => {
    if (!popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  const usernameClasses = usernameHasErr
    ? classes.invalid
    : usernameIsValid
    ? classes.valid
    : '';

  const emailClasses = emailHasErr
    ? classes.invalid
    : emailIsValid
    ? classes.valid
    : '';

  const pwdClasses = pwdHasErr
    ? classes.invalid
    : pwdIsValid
    ? classes.valid
    : '';

  const pwd2Classes = pwd2HasErr
    ? classes.invalid
    : pwd2IsValid
    ? classes.valid
    : '';

  return (
    <>
      <form action='' onSubmit={formSubmitHandler}>
        <div className={classes['form-group']}>
          <FormInput
            className={usernameClasses}
            id='username'
            label='Username'
            type='text'
            placeholder='Enter username'
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            onFocus={usernameFocusHandler}
            value={usernameVal}
          ></FormInput>
          <ErrList errData={usernameErr} />
        </div>
        <div className={classes['form-group']}>
          <FormInput
            className={emailClasses}
            id='email'
            label='Email'
            type='email'
            placeholder='Enter email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
            value={emailVal}
          ></FormInput>
          <ErrList errData={emailErr} />
        </div>
        <div className={classes['form-group']}>
          <FormInput
            className={pwdClasses}
            id='pwd'
            label='Password'
            type='password'
            placeholder='Enter password'
            onChange={pwdChangeHandler}
            onBlur={pwdBlurHandler}
            onFocus={pwdFocusHandler}
            value={pwdVal}
          ></FormInput>
          <ErrList errData={pwdErr} />
        </div>
        <div className={classes['form-group']}>
          <FormInput
            className={pwd2Classes}
            id='pwd2'
            label='Confirm Password'
            type='password'
            placeholder='Enter password again'
            onChange={pwd2ChangeHandler}
            onBlur={pwd2BlurHandler}
            onFocus={pwd2OnFocusHandler}
            value={pwd2Val}
          ></FormInput>
          <ErrList errData={pwd2Err} />
        </div>
        <div className={classes['form-group']}>
          <Button type='submit'>Submit</Button>
        </div>
      </form>

      {showPopup && (
        <Popup onClick={closePopupHandler} ref={popupRef}>
          <h2>Form submitted successfully!</h2>
        </Popup>
      )}
    </>
  );
};

export default Form;
