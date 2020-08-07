import React, { ElementType } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { Sublabel } from 'components';

type FormField = {
  component: ElementType;
  name: string;
  errors: any;
  formRef?: any;
  placeholder?: string;
  required?: boolean;
  values: any;
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormField = ({
  component: T,
  name,
  errors,
  formRef,
  required,
  values,
  ...props
}: FormField) => {
  return (
    <Field>
      <Sublabel htmlFor={name}>
        {startCase(name)} {required && '*'}
      </Sublabel>
      <T id={name} name={name} formRef={formRef} value={values[name]} {...props} />
      {errors[name] && errors[name].message}
    </Field>
  );
};

export default FormField;
