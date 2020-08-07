import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    variant?: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }
}

declare global {
  interface Window {
    shellOpenExternal: (path: string) => void;
  }
}

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}

export type APIError = {
  error: {
    response: {
      data: {
        error: string;
        message: string;
        code: number;
      };
    };
  };
};
