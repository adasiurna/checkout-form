import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Optional onChange handler
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, disabled, onChange }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Field name={name} as="select" id={name} disabled={disabled} onChange={onChange}>
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-danger" />
    </FormGroup>
  );
};

export default SelectField;
