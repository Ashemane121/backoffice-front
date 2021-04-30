import React, { useState } from 'react';
import AlreadyAuth from './AlreadyAuth';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const token = localStorage.getItem('token');

  function submitForm() {
    setIsSubmitted(true);
  }

  if (token) {
    return (<AlreadyAuth />);
  } else {
    return (
      <>
        <div className='form-container'>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  }

};

export default Form;
