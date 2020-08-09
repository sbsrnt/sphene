import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';
import { NAV_FEATURES } from 'features';

import type { ListItem as ListItemType } from './ListItem';
import ListItem from './ListItem';

const Nav = styled.nav`
  border-top: 1px solid ${(props) => props.theme.colors.gray700};
  padding-top: 10px;
  height: 100%;
  background: ${(props) => props.theme.colors.gray100};
  display: grid;
  grid-template-rows: calc(100% - 100px);
`;

const List = styled(motion.ul)`
  height: 100%;
`;

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const NavSidebar = () => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <ThemeProvider>
      <Nav>
        <List variants={variants} initial="hidden" animate="visible">
          {/*<ListItem onClick={isAuthenticated ? logout : loginWithRedirect}>*/}
          {/*  <Link to={isAuthenticated ? '/logout' : '/login'}>*/}
          {/*    <i className="material-icons">login</i>*/}
          {/*    <span> {isAuthenticated ? 'logout' : 'login'}</span>*/}
          {/*  </Link>*/}
          {/*</ListItem>*/}
          {NAV_FEATURES.map((f: ListItemType, i: number) => (
            <ListItem key={`nav_${i}`} {...f} />
          ))}
        </List>
      </Nav>
    </ThemeProvider>
  );
};

export default NavSidebar;
