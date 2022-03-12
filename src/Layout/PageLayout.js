import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme} from '@mui/material/styles';
import Footer from './Footer';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const useStyles = makeStyles({
  Main: {
    paddingLeft:"24px", paddingRight:"24px"
  }
  });

const PageLayout = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    

  return (
    <div>
      {
        matches?<DesktopHeader/>:<MobileHeader/>
      }
      <main className={classes.Main}>
        <Outlet />
      </main>
      <Footer/>
    </div>
    );
}

export default PageLayout;