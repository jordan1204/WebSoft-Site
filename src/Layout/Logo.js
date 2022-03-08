import logo from '../img/logo.png';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Logo: {
        paddingTop: '0.67em',
        paddingBottom:'0.67em'
    }
  });

const Logo = () => {
    const classes = useStyles();
    return (
        <Link sx={{ display: 'inline-flex',color:"black",marginLeft:"24px" }} href="/" underline="none">
            <div className={classes.Logo}>
              <img src={logo} alt="logo" />
            </div>
            <h1>匯融科技</h1>
        </Link>
    );

}

export default Logo;