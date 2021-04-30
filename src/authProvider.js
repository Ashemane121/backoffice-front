import decodeJwt from 'jwt-decode';

const authProvider = {
  // authentication
  login: ({ email, password }) => {
    const request = new Request('http://localhost:5000/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const check = localStorage.getItem('token');
    if (check) return Promise.reject({ message: 'Already loged in' })

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        const decodedToken = decodeJwt(token);
        decodedToken.permissions = ['zlebya', 123];
        localStorage.setItem('token', token);
        localStorage.setItem('decodedToken', decodedToken);
        localStorage.setItem('permissions', decodedToken.permissions);
        localStorage.setItem('id', decodedToken.id);
        localStorage.setItem('email', decodedToken.email);
        localStorage.setItem('username', decodedToken.name);
        localStorage.setItem('test', decodedToken.test);

      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      // log the user out for both 401 and 403
      //localStorage.clear();
      return Promise.reject({ message: false });
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    //localStorage.removeItem('token');
    localStorage.clear();
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const email = JSON.parse(localStorage.getItem('token'));
      localStorage.setItem('aboutmeemail', email);
      return Promise.resolve(email);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  }
};

export default authProvider;
