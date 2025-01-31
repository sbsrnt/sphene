import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { ReactComponent as Edit } from 'icons/Edit.svg';
import { ReactComponent as NotificationPreview } from 'icons/NotificationPreview.svg';
import { ReactComponent as Remove } from 'icons/Remove.svg';
import styled from 'styled-components';

import { Body, Card, Column, Header, Row, Sublabel } from 'components';

import systemNotification from '../../../utils/systemNotification';
import { deleteReminderRequest, setActiveReminder } from '../actions';
import { getRemindersDeletingStatusSelector } from '../selectors';

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

export type OwnProps = {
  index: number;
  toggleModal: () => void;
};

const StyledReminder = styled((props) => <Card {...props} />)`
  width: 300px;
  height: 200px;
  margin-right: 1em;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: calc(270px - 3em - 1px) calc(31px + 1em);
`;

const StyledDate = styled.span`
  color: ${(props) => props.theme.colors.green300};
`;

const StyledReminderActions = styled.div`
  padding-left: 1em;
  border-left: 1px solid ${(props) => props.theme.colors.gray800};

  div {
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray800};

    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;

      path {
        stroke: ${(props) => props.theme.colors.gray800};
      }
    }

    &:last-child {
      margin-bottom: 0;
      border: 0;
    }
  }
`;

const StyledEdit = styled(Edit)`
  :hover {
    path {
      stroke: ${(props) => props.theme.colors.green300};
    }
  }
`;

const StyledRemove = styled(Remove)`
  :hover {
    path {
      stroke: ${(props) => props.theme.colors.red300};
    }
  }
`;

const StyledNotificationPreview = styled(NotificationPreview)`
  :hover {
    path {
      stroke: ${(props) => props.theme.colors.blue500};
    }
  }
`;

const StyledReminderDetails = styled.div<{ isDeleting: boolean }>`
  opacity: ${(props) => (props.isDeleting ? 0.5 : 1)};
`;

const Reminder = ({ toggleModal, index, ...reminder }: Reminder & OwnProps) => {
  const dispatch = useDispatch();
  const deletingId = useSelector(getRemindersDeletingStatusSelector);
  const { _id, remindAt, occurrence, description, title, type } = reminder;
  const date = new Date(remindAt);
  const formattedRemindAt = format(date, 'do MMM');
  const formattedRemindOn = format(date, 'HH:mm');

  const handleReminderEdit = () => {
    dispatch(setActiveReminder(reminder));
    toggleModal();
  };

  const handleReminderDelete = () => {
    dispatch<any>(deleteReminderRequest(_id)).then(({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success(`Successfully deleted reminder!`);
    });
  };

  const handleNotificationPreview = () =>
    systemNotification({ title: reminder.title, body: reminder.description });

  return (
    <StyledReminder>
      <StyledReminderDetails isDeleting={deletingId === _id} data-cy={`reminder-${index}`}>
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
              Occurr <StyledDate>{type}</StyledDate> <StyledDate>{occurrence}</StyledDate>
            </Sublabel>
          </Column>
        </Row>
      </StyledReminderDetails>
      <StyledReminderActions className="reminder-actions">
        <div>
          <StyledEdit onClick={handleReminderEdit} data-cy={`button-updateReminder-${index}`} />
        </div>
        <div>
          <StyledRemove onClick={handleReminderDelete} data-cy={`button-deleteReminder-${index}`} />
        </div>
        <div>
          <StyledNotificationPreview onClick={handleNotificationPreview} />
        </div>
      </StyledReminderActions>
    </StyledReminder>
  );
};

export default Reminder;
