import React from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { NavSidebar, UserRoute } from 'components';
import { Dashboard, Invoicing, Reminders } from 'features';

import Logout from './Logout';

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
`;

const UserView = () => (
  <>
    <Logout />
    <Container>
      <NavSidebar />
      <Switch>
        <UserRoute exact path={PATHS.DASHBOARD} component={Dashboard} />
        <UserRoute exact path={PATHS.INVOICES} component={Invoicing} />
        <UserRoute exact path={PATHS.REMINDERS} component={Reminders} />
      </Switch>
    </Container>
  </>
);

export default UserView;
