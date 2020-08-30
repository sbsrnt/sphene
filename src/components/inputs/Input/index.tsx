import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  outline: none;
  padding: 5px 0;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSizes.default};
  font-family: 'Roboto', sans-serif;
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
