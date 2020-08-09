import React, { ReactNode } from 'react';
import { isArray } from 'lodash';
import styled from 'styled-components';

type AuthContainerProps = {
  children: ReactNode | ReactNode[];
};

const StyledAuthContainerWithFooter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <>
      <div className="header" />
      {isArray(children) ? (
        <StyledAuthContainerWithFooter>
          {children[0]}
          {children[1]}
        </StyledAuthContainerWithFooter>
      ) : (
        children
      )}
    </>
  );
};

export default AuthContainer;
