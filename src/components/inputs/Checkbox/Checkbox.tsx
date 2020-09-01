import React, { FC } from 'react';

type Checkbox = {
  id: string;
  name?: string;
  formRef?: any;
  onChange?: () => void;
  checked?: boolean;
  dataId?: string;
};

const Checkbox: FC<Checkbox> = ({ id, name, formRef, dataId, ...props }) => {
  return <input type="checkbox" id={id} name={name} ref={formRef} data-cy={dataId} {...props} />;
};

export default Checkbox;
