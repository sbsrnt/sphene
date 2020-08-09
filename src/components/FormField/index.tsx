import React, { ElementType } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { Label } from 'components';

type FormField = {
  component: ElementType;
  name: string;
  errors: any;
  formRef?: any;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormField = ({ component: T, name, errors, formRef, required, ...props }: FormField) => {
  return (
    <Field>
      <Label htmlFor={name}>
        {startCase(name)} {required && '*'}
      </Label>
      <T id={name} name={name} formRef={formRef} {...props} />
      {errors[name] && errors[name].message}
    </Field>
  );
};

export default FormField;
