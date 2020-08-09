import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Actions = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    margin-left: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};

    i {
      transition: all ease 0.2s;
      font-size: 20px;
    }

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      i.settings {
        transform: rotate(90deg);
      }
    }
  }
`;

type PageActions = {
  children: ReactNode;
};

const PageActions: FC<PageActions> = ({ children }) => <Actions>{children}</Actions>;

export default PageActions;
