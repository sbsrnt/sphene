type ActionType = string;
export const success = (actionType: ActionType) => `${actionType}_SUCCESS`;
export const failure = (actionType: ActionType) => `${actionType}_FAIL`;

type NestError = {
  error: string;
  message: string;
  statusCode: number;
};

type AxiosError = {
  data: NestError;
  status: number;
};

export const apiErrorBinder = (e?: AxiosError): { error: NestError | null } => {
  if (!e) return { error: null };

  const { data: error } = e;

  return {
    error,
  };
};

type NestPayload = any;

export const apiSuccessBinder = (payload?: NestPayload): NestPayload => {
  if (!payload) return {};
  return payload;
};
