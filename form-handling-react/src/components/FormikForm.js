// src/components/formikForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required!'),
      email: Yup.string().email('Invalid email address').required('Email is required!'),
      password: Yup.string().required('Password is required!'),
    }),
    onSubmit: (values) => {
      console.log('User Registered:', values);
      alert('Registration successful!');
      formik.resetForm(); // Reset the form after successful submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <p style={{ color: 'red' }}>{formik.errors.username}</p>
        ) : null}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        ) : null}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
