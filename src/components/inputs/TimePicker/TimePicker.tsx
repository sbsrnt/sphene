import React from 'react';
import styled from 'styled-components';

type TimePickerProps = {
  formRef?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
  value?: string;
  readOnly?: boolean;
};

const StyledTimePicker = styled.input`
  padding: 3.5px 0;
  border: 0;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSizes.default};
  font-family: 'Roboto', sans-serif;
`;

const TimePicker = ({ formRef, ...props }: TimePickerProps) => (
  <StyledTimePicker type="time" ref={formRef} {...props} />
);

export default TimePicker;
