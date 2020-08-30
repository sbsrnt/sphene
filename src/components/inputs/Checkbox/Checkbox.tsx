import React, { FC } from 'react';

type Checkbox = {
  id: string;
  name?: string;
  formRef?: any;
  onChange?: () => void;
  checked?: boolean;
};

const Checkbox: FC<Checkbox> = ({ id, name, formRef, ...props }) => {
  return <input type="checkbox" id={id} name={name} ref={formRef} {...props} />;
};

export default Checkbox;
