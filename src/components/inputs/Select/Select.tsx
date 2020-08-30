import React from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
type SelectProps = {
  required?: boolean;
  options: any[];
  control: any;
  name: string;
};

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: 0,
    borderBottom: '1px solid',
    borderRadius: 0,
    outline: 0,
    borderColor: 'black',
    boxShadow: 0,
    minHeight: 'initial',
    ':hover': {
      ...provided[':hover'],
      border: 0,
      borderBottom: '1px solid',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    '> div': {
      padding: 0,
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#00695c' : undefined,
    ':hover': {
      ...provided[':hover'],
      backgroundColor: '#00796b',
      color: '#FFFFFF',
    },
  }),
};

const Select = ({ control, options, required = true, name, ...props }: SelectProps) => {
  return (
    <Controller
      rules={{ required }}
      control={control}
      name={name}
      {...props}
      render={({ onChange, onBlur }) => (
        <ReactSelect
          styles={selectStyles}
          options={options}
          onChange={(option: any) => onChange(option.value)}
          onBlur={onBlur}
          name={name}
        />
      )}
    />
  );
};

export default Select;
