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
            color: '#1976d2',
            left: 0,
            position: 'absolute'
        },
        paddingInlineStart: '2em',
        fontSize:'18px'
    }
});
  
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

const Customers = () => { 
    const classes = useStyles();
    return (
        <FormControl component="article" fullWidth>
            <h2>
                客戶案例
            </h2>
            <ThemeProvider theme={theme}>
                <Divider />
            </ThemeProvider>
            <Grid container spacing={2} component="ul">
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h3>工廠設備管理系統</h3>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.EMS.map(function (item,index) { 
                            return <li className={classes.DetailItem} key={index}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h3>WMS倉儲管理</h3>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.WMS.map(function (item,index) { 
                            return <li className={classes.DetailItem} key={index}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h3>MES系統導入</h3>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.MES.map(function (item,index) { 
                            return <li className={classes.DetailItem} key={index}>{item}</li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h3>企業委外軟體開發</h3>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.Delegation.map(function (item,index) { 
                            return <li className={classes.DetailItem} key={index}><span>{item}</span></li>
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} component="li" className={classes.CustomersItem}>
                    <h3>Android{' '}APP</h3>
                    <ul className={classes.DetailContainer}>
                        {CustomerGroups.Android.map(function (item,index) { 
                            return <li className={classes.DetailItem} key={index}>{item}</li>
                        })}
                    </ul>
                </Grid>
            </Grid>
        </FormControl>

    );

}

export default Customers;