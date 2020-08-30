import React from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { Sublabel } from 'components';

type ModalTitleProps = {
  activeStep: number;
  reminderType: string;
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = ({ activeStep, reminderType }: ModalTitleProps) => {
  return (
    <StyledDiv>
      {activeStep === 1 ? 'Create New Reminder' : `Create New ${startCase(reminderType)} Reminder`}
      <Sublabel>Step {activeStep} / 2</Sublabel>
    </StyledDiv>
  );
};

export default ModalTitle;
