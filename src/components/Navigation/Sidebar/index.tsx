import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';
import { NAV_FEATURES } from 'features';

import type { ListItem as ListItemType } from './ListItem';
import ListItem from './ListItem';

const Nav = styled.nav`
  border-top: 1px solid ${(props) => props.theme.bg.tertiary};
  padding-top: 10px;
  height: 100%;
  background: ${(props) => props.theme.bg.primary};
  display: grid;
  grid-template-rows: calc(100% - 100px);
`;

const List = styled(motion.ul)`
  height: 100%;
`;

const About = styled.div`
  border-top: 1px solid ${(props) => props.theme.bg.tertiary};
  display: flex;
  flex-direction: column;

  li {
    height: 100%;
    display: flex;
    align-items: baseline;
  }
`;

const AppVer = styled.div`
  font-size: 12px;
  text-align: center;
  padding-bottom: 0.5em;
  color: ${(props) => props.theme.bg.tertiary};
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
        <About>
          <ListItem path="/logout" icon="power_settings_new" label="Logout" />
          <AppVer>app ver.{process.env.REACT_APP_VERSION}</AppVer>
        </About>
      </Nav>
    </ThemeProvider>
  );
};

export default NavSidebar;
