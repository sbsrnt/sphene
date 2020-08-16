import React from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import { NavSidebar, UserRoute } from 'components';
import { Invoicing, Reminders } from 'features';

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
        <UserRoute exact path="/" component={Invoicing} />
        <UserRoute exact path="/invoicing" component={Invoicing} />
        <UserRoute exact path="/reminders" component={Reminders} />
      </Switch>
    </Container>
  </>
);

export default UserView;
