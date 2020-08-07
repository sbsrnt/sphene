type ActionType = string;
export const success = (actionType: ActionType) => `${actionType}_SUCCESS`;
export const failure = (actionType: ActionType) => `${actionType}_FAIL`;
