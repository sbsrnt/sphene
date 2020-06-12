import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from 'hooks';

const List = styled.ul`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Anchor = styled(Link)`
  width: 100%;
  padding: 10px;
  display: block;

  &:active,
  &:hover,
  &:visited,
  &:link {
    color: white;
  }
`;

const ListItem = styled.li``;

const NavSidebar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <List>
      <Anchor to="/">Sphene</Anchor>
      <ListItem onClick={isAuthenticated ? logout : loginWithRedirect}>
        <Anchor to={isAuthenticated ? '/logout' : '/login'}>
          {isAuthenticated ? 'logout' : 'login'}
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor to="/invoicing">Invoicing</Anchor>
      </ListItem>
    </List>
  );
};

export default NavSidebar;
