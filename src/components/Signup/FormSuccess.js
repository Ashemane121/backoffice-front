import { Link } from '@material-ui/core';
import React from 'react';
import './Form.css';

const FormSuccess = () => {

  return (
    <div>
      <h1>Votre compte a été créé avec succès !</h1>
      <Link href='/#/login'>Try to Login Now</Link>
    </div>
  );
};

export default FormSuccess;
