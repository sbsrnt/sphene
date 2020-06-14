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
