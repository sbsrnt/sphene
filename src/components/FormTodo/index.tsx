import React, { FC, useReducer, useRef } from 'react';

import { Checkbox, Input } from 'components';

import formTodoReducer, { Todo } from './reducer';

type FormTodoProps = {
  register: any;
  errors: any;
  todos: Todo[];
};

const FormTodo: FC<FormTodoProps> = ({ register, errors, todos }) => {
  const initialState = todos || [];
  const focusedAddInput = useRef(null);
  const focusedEditInput = useRef(null);
  const [state, dispatch] = useReducer(formTodoReducer, initialState);

  return (
    <div>
      <Input formRef={focusedAddInput} />
      <ul>
        {state.map(
          (todo) =>
            todo && (
              <li ref={focusedEditInput}>
                <Checkbox id={todo.id} name={todo.label} />
                <p>{todo.label}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default FormTodo;
