import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { APIError } from 'types';
import { Body, Bold, Button, Column, Header, Link, Loader, Row } from 'components';

import AuthContainer from '../Container';
import { getVerifyEmailSelector } from '../selectors';
import { verifyEmailRequest } from './actions';

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledBody = styled(Body)`
  width: 100%;
`;

const StyledHeader = styled(Header)<{ error?: APIError }>`
  color: ${(props) => props.theme.colors[props.error ? 'red300' : 'green300']};
`;

const StyledSpan = styled(Bold)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.teal300};
  cursor: pointer;
`;

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getVerifyEmailSelector);
  const { token } = useParams();

  useEffect(() => {
    dispatch(verifyEmailRequest(token));
  }, [dispatch, verifyEmailRequest, token]);

  const handleEmailVerificationResend = () => console.log('TBD');

  return (
    <AuthContainer>
      <StyledContainer>
        {isLoading && <Loader />}
        {!error && !isLoading && (
          <Row>
            <StyledHeader>Your account has been verified!</StyledHeader>
            <StyledBody>You can fully access the app now.</StyledBody>
          </Row>
        )}
        {error && !isLoading && (
          <div>
            <Row>
              <Column>
                <StyledHeader error={error}>{error.message}</StyledHeader>
              </Column>
            </Row>
            <Row>
              <Column>
                <StyledBody>
                  You can re-send verification email by{' '}
                  <StyledSpan onClick={handleEmailVerificationResend}>clicking here</StyledSpan>.
                </StyledBody>
              </Column>
            </Row>
          </div>
        )}
      </StyledContainer>
      <Button as={Link} to={PATHS.SIGN_IN} dataId="button-go-back" disabled={isLoading} block>
        Go Back
      </Button>
    </AuthContainer>
  );
};

export default VerifyEmail;
