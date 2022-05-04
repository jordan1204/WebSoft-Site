import Grid from '@mui/material/Grid';
import { Link,useLocation } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menus from '../ListGroups/Menus';

const useStyles = makeStyles({
    AnchorMenuItem: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.5em',
        padding:"10px"
    },
    MenuItem: {
        listStyleType:'none',
    },
    NavMobile: {
        marginBottom: '100px',
    },
    NavDesktop: {
        paddingBottom:"30px"
    },
    NavActive:{
        backgroundColor:"deepskyblue",
        color:"white",
        borderRadius:"10px"
    }
  });

const Menu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <Grid container spacing={2} component="nav" className={matches?classes.NavDesktop:classes.NavMobile}>
            {
                Menus.map(function (item,index) {
                    const activeClass = pathname == item.Href?classes.NavActive:"";
                    return (<Grid item xs={12} md={2} component="li" className={classes.MenuItem} key={index}>
                        <Link to={item.Href} key={index} className={`${classes.AnchorMenuItem} ${activeClass}`} style={matches ? { marginLeft: '24px' } : { marginLeft: '48px' }}>
                            {item.Text}
                        </Link>
                            </Grid>);
                })
            }
        </Grid>
    );
}

export default Menu;