import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  background: ${(props) => props.theme.bg.secondary}99;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Backdrop = ({ ...props }) => {
  return <StyledBackdrop {...props} />;
};

export default Backdrop;
