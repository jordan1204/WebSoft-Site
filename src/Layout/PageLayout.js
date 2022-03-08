import Menu from './Menu';
import Logo from './Logo';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme,createTheme,ThemeProvider } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
    header: {
        width: "100%",
        backgroundColor: '#bac4e8',
        position: "relative",
    },
  });
  const themeprovider = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            position:'absolute',
            right: "20px",
            top:"10px",
            width: "3rem",
            height: "3rem",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
            root: {
                width: "3rem",
                height: "3rem",
                fontSize:"3rem"
            },
          },
    }
    },
});


const PageLayout = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [open, setOpen] = useState(false);
    const ToggleMenu = () => {
        setOpen((prev) => !prev);
    }
    return (
        <Container maxWidth="xl">
            <ThemeProvider theme={themeprovider}>
                <header className={classes.header} style={matches?{height:"300px"}:{}}>
                    <Logo />
                    {matches?<Menu />: <Collapse in={open} timeout="auto">
                                            <Menu />
                                        </Collapse>
                    }
                    {matches ? null : <IconButton onClick={ToggleMenu}><MenuIcon/></IconButton>}
            </header>
            </ThemeProvider>
            <Outlet/>
        </Container>
    );
}

export default PageLayout;