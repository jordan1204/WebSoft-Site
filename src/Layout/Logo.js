import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Logo: {
        paddingTop: '0.67em',
        paddingBottom:'0.67em'
    },
    CompanyName: {
        color:"white"
    },
    Link: {
        display: 'inline-flex',
        color: "black",
        marginLeft: "24px",
        textDecoration: "none"
    }
  });

const Logo = () => {
    const classes = useStyles();
    return (
        <Link className={classes.Link} to="/" underline="none">
            <div className={classes.Logo}>
              <img src={logo} alt="logo" width="48" height="60"/>
            </div>
            <h1 className={classes.CompanyName}>匯融科技</h1>
        </Link>
    );

}

export default Logo;