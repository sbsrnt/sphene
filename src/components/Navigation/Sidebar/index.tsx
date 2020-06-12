import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';

import type { ListItem as ListItemType } from './ListItem';
import ListItem from './ListItem';

const Nav = styled.nav`
  border-top: 1px solid ${(props) => props.theme.bg.tertiary};
  padding-top: 10px;
  height: 100%;
  background: ${(props) => props.theme.bg.primary};
`;

const List = styled(motion.ul)`
  height: 100%;
`;

const list = {
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

const features = [
  {
    path: '/invoicing',
    icon: 'request_quote',
    label: 'Invoicing',
  },
  {
    path: '/notifications',
    icon: 'add_alert',
    label: 'Notifications',
  },
];

const NavSidebar = () => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <ThemeProvider>
      <Nav>
        <List variants={list} initial="hidden" animate="visible">
          {/*<ListItem onClick={isAuthenticated ? logout : loginWithRedirect}>*/}
          {/*  <Link to={isAuthenticated ? '/logout' : '/login'}>*/}
          {/*    <i className="material-icons">login</i>*/}
          {/*    <span> {isAuthenticated ? 'logout' : 'login'}</span>*/}
          {/*  </Link>*/}
          {/*</ListItem>*/}
          {features.map((f: ListItemType, i: number) => (
            <ListItem key={`nav_${i}`} {...f} />
          ))}
        </List>
      </Nav>
    </ThemeProvider>
  );
};

export default NavSidebar;
