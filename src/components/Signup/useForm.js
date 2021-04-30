import { useEffect, useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {

    const token = localStorage.getItem('token');
    if (!token) {
      e.preventDefault();
      //var params = { username: values.username, password: values.password, email: values.email };
      //axios.get(`http://localhost:5000/users/exists/${values.email}`)
      //  .then(res => {
      //    if (res.data.length === 0) {
      //      axios.post("http://localhost:5000/signup", params)
      //        .then(res => {
      //          if (res.data.success === true) {
      //            localStorage.token = res.data.token;
      //            localStorage.isAuthenticated = true;
      //            window.location.reload();
      //          } else {
      //            console.log(res.data.message);
      //          }
      //        })
      //        .catch(err => {
      //          console.log("Sign up data submit error: ", err);
      //        });
      //    }
      //  })
      //  .catch(err => {
      //    console.log(err);
      //  });

      setErrors(validate(values));

      console.log('fi west use forme ', errors);
      setIsSubmitting(true);
    }



  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
