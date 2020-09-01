import React, { ElementType } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { AnimatedList, Label, Sublabel } from 'components';

type FormField = {
  component: ElementType;
  name: string;
  errors: any;
  formRef?: any;
  control?: any;
  placeholder?: string;
  required?: boolean;
  type?: string;
  dataId?: string;
  options?: any[];
  animated?: boolean;
  disabled?: boolean;
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledItem = styled(AnimatedList.Item)<any>`
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
  control,
  errors,
  formRef,
  required,
  dataId,
  animated = false,
  ...props
}: FormField) => {
  const Tag = animated ? StyledItem : Field;
  return (
    <Tag animation="fromTop">
      <Label htmlFor={name} data-cy={`label-${dataId}`}>
        {startCase(name)} {required && '*'}
      </Label>
      <T
        id={name}
        name={name}
        formRef={formRef ? formRef({ required }) : null}
        control={control}
        data-cy={`input-${dataId}`}
        {...props}
      />
      <Sublabel data-cy={`sublabel-${dataId}`}>{errors[name] && errors[name].message}</Sublabel>
    </Tag>
  );
};

export default FormField;
