const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export type Todo = { id: number; checked: boolean; label: string };
export type Payload = { type: string; payload: any };

const formTodoReducer = (state: Todo[], { type, payload }: Payload) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case EDIT_TODO:
      return state.filter(({ id }) => id === payload.id).concat(payload);
    case REMOVE_TODO:
      return state.filter(({ id }) => id === payload.id);
    default:
      return state;
  }
};

export default formTodoReducer;
