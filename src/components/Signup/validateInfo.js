import axios from 'axios';
const createHistory = require("history").createBrowserHistory;


export default function validateInfo(values) {
  let errors = {};
  let oups = false;
  console.log(oups, 'and our values : ', values);
  localStorage.removeItem('emailUsed');

  if (!values.username.trim()) {
    errors.username = 'Username required';
    oups = true;
  }

  if (!values.email) {
    errors.email = 'Email required';
    oups = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    oups = true;
  }

  if (!values.password) {
    errors.password = 'Password is required';
    oups = true;
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
    oups = true;
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
    oups = true;
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
    oups = true;
  }

  if (oups) {
    console.log('validate error', errors, oups);
  } else {
    console.log('validate jawek behi tnajem tposti', errors, oups)
    var params = { username: values.username, password: values.password, email: values.email };
    axios.get(`http://localhost:5000/users/exists/${values.email}`)
      .then(res => {
        if (res.data.length === 0) {
          axios.post("http://localhost:5000/signup", params)
            .then(res => {
              if (res.data.success === true) {
                //localStorage.token = res.data.token;
                //localStorage.isAuthenticated = true;
                window.location.reload();
              } else {
                console.log(res.data.message);
              }
            })
            .catch(err => {
              console.log("Sign up data submit error: ", err);
            });
        } else {
          console.log('email already used');
          localStorage.setItem('emailUsed', true);
          let history = createHistory();
          history.go('/signup');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return errors;
}
