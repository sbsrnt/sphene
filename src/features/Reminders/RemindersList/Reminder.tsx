import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Body, Bold, Card, Column, Header, Row, Sublabel } from 'components';

export type Reminder = {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
  remindAt: Date;
  type: number;
  occurrence: number;
  description: string;
  title: string;
};

const StyledReminder = styled((props) => <Card {...props} />)`
  width: 300px;
  height: 200px;
  margin-right: 1em;
  margin-bottom: 1em;
`;

const StyledDate = styled.span`
  color: ${(props) => props.theme.colors.green300};
`;

const Reminder = ({ _id, remindAt, type, occurrence, description, title }: Reminder) => {
  const date = new Date(remindAt);
  const formattedRemindAt = format(date, 'do MMM');
  const formattedRemindOn = format(date, 'HH:mm');
  return (
    <StyledReminder>
      <Row>
        <Column>
          <Header as="h3">{title}</Header>
        </Column>
      </Row>
      <Row>
        <Column>
          <Body>{description}</Body>
        </Column>
      </Row>
      <Row>
        <Column>
          <Sublabel>
            Remind at <StyledDate>{formattedRemindAt}</StyledDate> on{' '}
            <StyledDate>{formattedRemindOn}</StyledDate>
          </Sublabel>
        </Column>
      </Row>
      <Row>
        <Column>
          <Sublabel>
            Occurr <StyledDate>{occurrence}</StyledDate>
          </Sublabel>
        </Column>
      </Row>
    </StyledReminder>
  );
};

export default Reminder;
