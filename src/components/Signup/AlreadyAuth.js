import { Link } from '@material-ui/core';
import React from 'react';
import './Form.css';


const AlreadyAuth = () => {

  return (
    <div className='form-container'>
      <h1>Already authenticated</h1>
      <Link href='/'>GO TO INDEX BRO</Link>
    </div>
  );
};

export default AlreadyAuth;
