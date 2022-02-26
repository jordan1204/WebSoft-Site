import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    AnchorMenuItem: {
        textDecoration: 'none'
    },
    MenuItem: {
        listStyleType:'none',
        textAlign: 'center'
    }
  });

const Menu = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} component="nav">
            <Grid item xs={12} lg={3} component="li" className={classes.MenuItem}>
                <Link to="/" className={classes.AnchorMenuItem}>關於我們</Link>
            </Grid>
            <Grid item xs={12} lg={3} component="li" className={classes.MenuItem}>
                <Link to="/" className={classes.AnchorMenuItem}>提供服務</Link>
            </Grid>
            <Grid item xs={12} lg={3} component="li" className={classes.MenuItem}>
                <Link to="/" className={classes.AnchorMenuItem}>產品介紹</Link>
            </Grid>
            <Grid item xs={12} lg={3} component="li" className={classes.MenuItem}>
                <Link to="/" className={classes.AnchorMenuItem}>聯絡我們</Link>
            </Grid>
        </Grid>
    );
}

export default Menu;