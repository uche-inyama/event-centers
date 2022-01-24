/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name} />
    </div>
  );
};

TextField.defaultProps = {
  label: '',
};

TextField.propTypes = {
  label: PropTypes.string,
};

export default TextField;
