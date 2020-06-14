const light = {
  button: {
    border: 0,
    none: {
      color: '#383838',
      background: 'transparent',
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
  bg: {
    primary: '#212121',
    secondary: '#181818',
    tertiary: '#383838',
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#999',
  },
};

export { light };
