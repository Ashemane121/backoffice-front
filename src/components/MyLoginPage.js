import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Notification, useAuthState, useLogin, useNotify } from 'react-admin';
import './Login.css';
import Logo from '../img/insight.png';
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
        <div className='login-box'>
          <div>
            <div className="logo-login"><img src={Logo} alt="nope"/></div>
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
          
          <Notification />
        </div>
      </div>

    );
  }



};

export default MyLoginPage;


