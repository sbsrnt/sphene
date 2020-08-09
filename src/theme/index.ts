const light = {
  colors: {
    white: '#FFFFFF',
    smokewhite: '#EEEEEE',
    gray100: '#181818',
    gray300: '#212121',
    gray500: '#2E2E2E',
    gray700: '#383838',
    gray900: '#777777',
  },
  typography: {
    fontSizes: {
      h1: '48px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      default: '16px',
      label: '14px',
    },
  },
  button: {
    border: 0,
    variant: {
      none: {
        color: '#999',
        background: 'transparent',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      bordered: {
        color: '#383838',
        border: '1px solid #383838',
        background: '#FFFFFF',
      },
      default: {
        background: '#283593',
        color: '#FFFFFF',
      },
      success: {
        background: '#00796b',
        color: '#FFFFFF',
        '&:hover': {
          background: '#00695c',
        },
      },
    },
    size: {
      large: {
        lineHeight: '40px',
      },
      medium: {
        lineHeight: '32px',
      },
      small: {
        lineHeight: '24px',
      },
    },
  },
};

export { light };
