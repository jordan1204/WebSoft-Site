import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menus from '../ListGroups/Menus';

const useStyles = makeStyles({
    AnchorMenuItem: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.5em',
    },
    MenuItem: {
        listStyleType:'none',
    },
    Nav: {
        marginBottom: '100px',
    }
  });

const Menu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Grid container spacing={2} component="nav" className={classes.Nav}>
            {
                Menus.map(function (item,index) {
                    return (<Grid item xs={12} md={3} component="li" className={classes.MenuItem} key={index}>
                        <Link to={item.Href} className={classes.AnchorMenuItem} style={matches ? {marginLeft:'24px'} : {marginLeft:'48px'}}>{item.Text}</Link>
                            </Grid>);
                })
            }
        </Grid>
    );
}

export default Menu;