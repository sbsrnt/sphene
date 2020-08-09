import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  outline: none;
  padding: 5px;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.bg.primary};
  font-size: 16px;
`;

type InputProps = {
  formRef?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
  value?: string;
  readOnly?: boolean;
};

const Input = ({ formRef, ...props }: InputProps) => <StyledInput ref={formRef} {...props} />;

export default Input;
