import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';
import { useState } from 'react';
import { Notification, useAuthState, useLogin, useNotify } from 'react-admin';
import './Login.css';
import AlreadyAuth from './Signup/AlreadyAuth';



const MyLoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = e => {
    e.preventDefault();
    login({ email, password }).catch((err) => {
      console.log(err);
      if (err.message === 'Already loged in') notify('Already loged in')
      else notify('Invalid email or password');
    }
    );
  };
  const { authenticated } = useAuthState();
  //console.log('Checking authentication :');
  //console.log(authenticated);

  if (authenticated) {
    return (<AlreadyAuth />);
  } else {
    return (
      <div>
        <div className='container'>
          <div>
            <Avatar className='icon' style={{ backgroundColor: '#1bbd7e' }}><LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
          </div>
          <form onSubmit={submit}>
            <TextField
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              label='Email'
              placeholder='Enter email' fullWidth required />
            <TextField
              label='Password'
              placeholder='Enter password'
              name="password"
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth required
            />
            <Button type='submit' color='primary' variant="contained" style={{ margin: '8px 0' }} fullWidth>Se Connecter</Button>
          </form>
          <Typography >
            <Link href="#" >Forgot password ?</Link>
          </Typography>
          <Typography >
            Do you have an account ?
           <Link href="/signup" >Sign Up</Link>
          </Typography>
          <Notification />
        </div>
      </div>

    );
  }



};

export default MyLoginPage;


