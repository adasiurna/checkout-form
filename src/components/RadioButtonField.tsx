import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';

interface RadioButtonFieldProps {
  label: string;
  name: string;
  value: string;
}

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({ label, name, value }) => {
  return (
    <FormGroup check>
      <Label check>
        <Field name={name} type="radio" value={value} as={Input} /> {label}
      </Label>
      <ErrorMessage name={name} component="div" className="text-danger" />
    </FormGroup>
  );
};

export default RadioButtonField;
