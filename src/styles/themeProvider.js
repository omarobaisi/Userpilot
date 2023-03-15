import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      background: {
        primary: '#ffffff',
        secondary: '#363740',
        hover: '#9FA2B4',
      },
      text: {
        main: '#252733',
        gray: '#A4A6B3',
      },
    },
    typography: {
      fontFamily: 'Mulish, sans-serif',
    },
  });
  
export default theme;