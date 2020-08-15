import React, { ElementType } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { Label, Sublabel } from 'components';

type FormField = {
  component: ElementType;
  name: string;
  errors: any;
  formRef?: any;
  placeholder?: string;
  required?: boolean;
  type?: string;
  dataId?: string;
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
  dataId,
  ...props
}: FormField) => {
  return (
    <Field>
      <Label htmlFor={name} data-cy={`label-${dataId}`}>
        {startCase(name)} {required && '*'}
      </Label>
      <T id={name} name={name} formRef={formRef} data-cy={`input-${dataId}`} {...props} />
      <Sublabel data-cy={`sublabel-${dataId}`}>{errors[name] && errors[name].message}</Sublabel>
    </Field>
  );
};

export default FormField;
