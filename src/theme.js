import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:'rgba(0,0,0,0.5)!important'
          },
        },
      },
    },
    
});

export default theme;