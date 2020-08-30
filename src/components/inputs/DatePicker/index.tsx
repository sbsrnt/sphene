import React from 'react';
import { getYear } from 'date-fns';
import styled from 'styled-components';

const StyledDatePicker = styled.input`
  padding: 3px 0;
  border: 0;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSizes.default};
  font-family: 'Roboto', sans-serif;
`;

type DatePicker = {
  formRef?: any;
};

const DatePicker = ({ formRef, ...props }: DatePicker) => {
  const currentYear = getYear(new Date());
  return (
    <StyledDatePicker
      type="date"
      ref={formRef}
      {...props}
      min={`${currentYear}-01-01`}
      max={`${currentYear}-12-31`}
    />
  );
};

export default DatePicker;
