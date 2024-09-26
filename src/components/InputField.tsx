import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type }) => {
  return (
    <FormGroup>
      <Field name={name} as={Input} type={type} id={name} placeholder={label} />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </FormGroup>
  );
};

export default InputField;
