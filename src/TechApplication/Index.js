import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Carousels from './Carousels';

const theme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:'rgba(0,0,0,0.5)'
          },
        },
      },
    },
});


const Index = () => {

    
    return (
      <ThemeProvider theme={theme}>
        <article>
            <h2>技術應用</h2>
            <Divider />
          <Carousels />
        </article>
      </ThemeProvider>
    );
}

export default Index;