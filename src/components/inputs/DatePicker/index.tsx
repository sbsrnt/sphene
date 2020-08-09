import React, { FC, useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import startOfToday from 'date-fns/startOfToday';
import styled from 'styled-components';

import { Input } from 'components/index';

const CalendarContainer = styled.div`
  margin-top: 10px;
`;

type DatePicker = {
  formRef?: any;
  value?: Date;
};

const DatePicker: FC<DatePicker> = ({ formRef, value, ...props }) => {
  console.log({ value });
  const today = startOfToday();
  const [isVisible, setIsVisible] = useState(false);
  const [pickedDate, setPickedDate] = useState(value || today);
  const toggleCalendar = () => setIsVisible((isVisible) => !isVisible);

  const handleDateClick = (date: Date) => {
    setPickedDate(date);
    setIsVisible(false);
  };

  return (
    <>
      <Input
        formRef={formRef}
        {...props}
        onFocus={toggleCalendar}
        value={format(new Date(pickedDate), 'do MMMM')}
        readOnly
      />
      {isVisible && (
        <CalendarContainer>
          <Calendar onClickDay={handleDateClick} defaultView="month" minDetail="month" />
        </CalendarContainer>
      )}
    </>
  );
};

export default DatePicker;
