import React, { ReactNode } from 'react';
import { ReactComponent as Logo } from 'icons/Logo.svg';
import { isArray } from 'lodash';
import styled from 'styled-components';

type AuthContainerProps = {
  children: ReactNode | ReactNode[];
};

const StyledAuthContainerWithFooter = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  text-align: center;

  svg {
    width: 100px;
    height: 100px;
    fill: ${(props) => props.theme.colors.gray100};
  }
`;

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <>
      <StyledHeader>
        <Logo />
      </StyledHeader>
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
