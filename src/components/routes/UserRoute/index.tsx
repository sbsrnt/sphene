import React, { ElementType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import PATHS from 'constants/paths';
import { useAuth } from 'hooks';

type UserRouteProps = {
  component: ElementType;
} & RouteProps;

const UserRoute = ({ component: Component, ...rest }: UserRouteProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: PATHS.SIGN_IN,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default UserRoute;
