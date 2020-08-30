import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';
import { AnimatedList } from 'components';
import { NAV_FEATURES } from 'features';

import type { ListItem as ListItemType } from './ListItem';
import ListItem from './ListItem';

const Nav = styled.nav`
  border-top: 1px solid ${(props) => props.theme.colors.gray700};
  padding-top: 10px;
  height: 100%;
  background: ${(props) => props.theme.colors.gray300};
  display: grid;
  grid-template-rows: calc(100% - 100px);
`;

const StyledNavItem = styled(AnimatedList.Item)`
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }
`;

const NavSidebar = () => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <ThemeProvider>
      <Nav>
        <AnimatedList>
          {/*<ListItem onClick={isAuthenticated ? logout : loginWithRedirect}>*/}
          {/*  <Link to={isAuthenticated ? '/logout' : '/login'}>*/}
          {/*    <i className="material-icons">login</i>*/}
          {/*    <span> {isAuthenticated ? 'logout' : 'login'}</span>*/}
          {/*  </Link>*/}
          {/*</ListItem>*/}
          {NAV_FEATURES.map((f: ListItemType, i: number) => (
            <StyledNavItem key={`nav_${i}`}>
              <ListItem {...f} />
            </StyledNavItem>
          ))}
        </AnimatedList>
      </Nav>
    </ThemeProvider>
  );
};

export default NavSidebar;
