import React from 'react';

import { occurrences } from 'constants/occurrences';
import { Column, DatePicker, FormField, Input, Row, Select, TimePicker } from 'components';

export type PaymentsReminderProps = {
  control: any;
  disabled: boolean;
  register: (props: { required?: boolean }) => void;
  errors: any;
};

const PaymentsReminder = ({ control, register, errors, disabled }: PaymentsReminderProps) => (
  <>
    <Row>
      <Column>
        <FormField
          component={Input}
          name="title"
          errors={errors}
          placeholder="ex. Tax Payment"
          formRef={register({ required: true })}
          disabled={disabled}
          required
        />
      </Column>
    </Row>
    <Row>
      <Column>
        <FormField
          component={Input}
          placeholder="ex. One week left for the payment buddy."
          name="description"
          errors={errors}
          formRef={register({ required: true })}
          disabled={disabled}
          required
        />
      </Column>
    </Row>
    <Row>
      <Column xs={6}>
        <FormField
          component={DatePicker}
          name="remindAt"
          errors={errors}
          formRef={register({ required: true })}
          disabled={disabled}
          required
        />
      </Column>
      <Column xs={6}>
        <FormField
          component={TimePicker}
          name="remindOn"
          errors={errors}
          formRef={register({ required: true })}
          disabled={disabled}
          required
        />
      </Column>
    </Row>
    <Row>
      <Column>
        <FormField
          component={Select}
          options={occurrences}
          name="occurrence"
          errors={errors}
          control={control}
          disabled={disabled}
          required
        />
      </Column>
    </Row>
  </>
);

export default PaymentsReminder;
