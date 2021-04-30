import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import './Form.css';
import useForm from './useForm';
import validate from './validateInfo';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
      <div>
        <Avatar className='icon' style={{ backgroundColor: '#1bbd7e' }}><LockOutlinedIcon /></Avatar>
        <h2>Créer un nouveau compte</h2>
      </div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <TextField fullWidth required
          label='Username'
          type='text'
          name='username'
          value={values.username}
          onChange={handleChange}
        />
        <div className='error'>
          {errors.username && <p>{errors.username}</p>}
        </div>
        <TextField fullWidth required
          label='Email'
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <div className='error'>
          {errors.email && <p>{errors.email}</p>}
          {localStorage.getItem('emailUsed') && <p>Email already used</p>}
        </div>
        <TextField fullWidth required
          label='Password'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <div className='error'>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <TextField fullWidth required
          label='Confirm Password'
          type='password'
          name='password2'
          value={values.password2}
          onChange={handleChange}
        />
        <div className='error'>
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <Button type='submit' color='primary' variant="contained" style={{ margin: '8px 0' }} fullWidth>
          S'inscrire
      </Button>
        <Typography >
          Already have an account?
        <Link href='/#/login'>Login here</Link>
        </Typography>
      </form>


    </div>
  )

};

export default FormSignup;
