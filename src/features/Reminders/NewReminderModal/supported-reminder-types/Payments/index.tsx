import React from 'react';

import { DatePicker, FormField, FormTodo, Input } from 'components';

type PaymentsReminderProps = {
  register: (props: { required?: boolean }) => void;
  errors: any;
};

const PaymentsReminder = ({ register, errors }: PaymentsReminderProps) => (
  <>
    <FormField
      component={Input}
      name="title"
      errors={errors}
      placeholder="ex. Tax Payment"
      formRef={register({ required: true })}
      required
    />
    <FormField
      component={Input}
      placeholder="ex. One week left for the payment buddy."
      name="description"
      errors={errors}
      formRef={register({ required: true })}
      required
    />
    <FormField
      component={DatePicker}
      name="repeatDay"
      errors={errors}
      formRef={register({ required: true })}
      required
    />
    <FormTodo register={register} errors={errors} todos={[]} />
  </>
);

export default PaymentsReminder;
