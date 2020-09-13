import React from 'react';
import styled from 'styled-components';

import { Card, Sublabel } from 'components';

import ListItem from './ListItem';

const StyledCard = styled((props) => <Card {...props} />)`
  margin-bottom: 1em;
`;

const StyledSublabel = styled(Sublabel)`
  display: block;
  margin-bottom: 0.5em;
`;

const Checklist = ({ register, errors, disabled }: any) => (
  <StyledCard>
    <StyledSublabel>You can add up to 3 checks.</StyledSublabel>
    <ListItem i={1} disabled={disabled} register={register} errors={errors} />
    <ListItem i={2} disabled={disabled} register={register} errors={errors} />
    <ListItem i={3} disabled={disabled} register={register} errors={errors} />
  </StyledCard>
);

export default Checklist;
