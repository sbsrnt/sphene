import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ThemeProvider } from 'context-providers';

const spin = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div<{ size: number }>`
  border-radius: 50%;
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  margin: 0 auto;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: ${(props) => props.size * 0.11}em solid ${(props) => props.theme.colors.gray700};
  border-right: ${(props) => props.size * 0.11}em solid ${(props) => props.theme.colors.gray700};
  border-bottom: ${(props) => props.size * 0.11}em solid ${(props) => props.theme.colors.gray700};
  border-left: ${(props) => props.size * 0.11}em solid ${(props) => props.theme.colors.white};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spin} 0.8s infinite linear;
  animation: ${spin} 0.8s infinite linear;

  &:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }
`;

const Loader = ({ size = 5 }: any) => (
  <ThemeProvider>
    <StyledLoader size={size} />
  </ThemeProvider>
);

export default Loader;
