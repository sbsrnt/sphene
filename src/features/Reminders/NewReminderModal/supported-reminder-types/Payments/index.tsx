import React, { FC } from 'react';

import { DatePicker, FormField, FormTodo, Input } from 'components';

type PaymentsReminderProps = {
  register: (props: { required?: boolean }) => void;
  errors: any;
  values?: any;
};

const PaymentsReminder: FC<PaymentsReminderProps> = ({ register, errors, values }) => (
  <>
    <FormField
      component={Input}
      name="title"
      errors={errors}
      placeholder="ex. Tax Payment"
      formRef={register({ required: true })}
      values={values}
      required
    />
    <FormField
      component={Input}
      placeholder="ex. One week left for the payment buddy."
      name="description"
      errors={errors}
      formRef={register({ required: true })}
      values={values}
      required
    />
    <FormField
      component={DatePicker}
      name="repeatDay"
      errors={errors}
      formRef={register({ required: true })}
      values={values}
      required
    />
    <FormTodo register={register} errors={errors} todos={[]} />
  </>
);

export default PaymentsReminder;
