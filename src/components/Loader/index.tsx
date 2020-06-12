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

const StyledLoader = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 30px auto;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.55em solid ${(props) => props.theme.bg.tertiary};
  border-right: 0.55em solid ${(props) => props.theme.bg.tertiary};
  border-bottom: 0.55em solid ${(props) => props.theme.bg.tertiary};
  border-left: 0.55em solid ${(props) => props.theme.colors.primary};
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

const Loader = () => (
  <ThemeProvider>
    <StyledLoader />
  </ThemeProvider>
);

export default Loader;
