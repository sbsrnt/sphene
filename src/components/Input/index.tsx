import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.bg.primary};
  padding: 5px 0;
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
