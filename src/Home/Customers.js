import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import CustomerGroups from '../DataBaseTables/Customer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    CustomersItem: {
        listStyleType:'none',
    },
    DetailContainer: {
        paddingLeft:'20px'
    },
    DetailItem: {
        listStyleType: 'none',
        position:'relative',
        '&:before': {
            content: "'\\1F836'",
            color: 'blue',
            left: 0,
            position: 'absolute'
        },
        paddingInlineStart:'2em'
    }
});
  
const theme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderWidth: '1px',
            borderColor:'black'
          },
        },
      },
    },
});

const Customers = () => { 
    const classes = useStyles();
    return (
        <FormControl component="article" fullWidth>
            <h3>
                客戶案例
            </h3>
            <ThemeProvider theme={theme}>
                <Divider />
            </ThemeProvider>
            <Grid container spacing={2} component="ul">
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h4>工廠設備管理系統</h4>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.EMS.map(function (item) { 
                            return <li className={classes.DetailItem}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h4>WMS倉儲管理</h4>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.WMS.map(function (item) { 
                            return <li className={classes.DetailItem}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h4>MES系統導入</h4>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.MES.map(function (item) { 
                            return <li className={classes.DetailItem}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h4>企業委外軟體開發</h4>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.Delegation.map(function (item) { 
                            return <li className={classes.DetailItem}><span>{item}</span></li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h4>Android{' '}App</h4>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.Android.map(function (item) { 
                            return <li className={classes.DetailItem}>{item}</li>
                        })}
                    </ul>
                </Grid>
            </Grid>
        </FormControl>

    );

}

export default Customers;