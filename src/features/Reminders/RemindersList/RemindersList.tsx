import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AnimatedList, Body, Loader } from 'components';

import { getAllRemindersRequest } from '../actions';
import { getRemindersStateSelector } from '../selectors';
import Reminder from './Reminder';

type RemindersList = {
  toggleModal: () => void;
};

const StyledRemindersList = styled(AnimatedList)`
  display: flex;
  flex-wrap: wrap;
`;

const RemindersList = ({ toggleModal }: RemindersList) => {
  const dispatch = useDispatch();
  const { isLoading, error, reminders } = useSelector(getRemindersStateSelector);

  const emptyReminders = !isLoading && !error?.message && reminders.length === 0;
  const isError = !isLoading && error?.message;

  useEffect(() => {
    dispatch<any>(getAllRemindersRequest());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {emptyReminders && <Body>There are no reminders. Add one.</Body>}
      {isError && <Body>Something went wrong with fetching reminders.</Body>}
      {!isLoading && reminders.length > 0 && (
        <StyledRemindersList data-cy="list-reminders">
          {reminders.map((reminder) => (
            <AnimatedList.Item key={reminder._id}>
              <Reminder toggleModal={toggleModal} {...reminder} />
            </AnimatedList.Item>
          ))}
        </StyledRemindersList>
      )}
    </div>
  );
};

export default RemindersList;
