import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/Adb';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TerminalIcon from '@mui/icons-material/Terminal';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ConstructionIcon from '@mui/icons-material/Construction';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    ServiceItem: {
        listStyleType:'none',
    },
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

const ServiceItem = () => { 
    const classes = useStyles();
    return (
        <FormControl component="article" fullWidth>
            <h3>
                服務項目
            </h3>
            <ThemeProvider theme={theme}>
                <Divider />
            </ThemeProvider>
            <Grid container spacing={2} component="ul">
                <Grid item xs={6} md={4}>
                    <SettingsSuggestIcon color="primary" fontSize="large"/>
                    <li className={classes.ServiceItem}>MES{' '}系統導入</li>
                </Grid>
                <Grid item xs={6} md={4}>
                    <WarehouseIcon color="primary" fontSize="large"/>
                    <li className={classes.ServiceItem}>WMS{' '}系統導入</li>
                </Grid>
                <Grid item xs={6} md={4}>
                    <TerminalIcon color="primary" fontSize="large"/>
                    <li className={classes.ServiceItem}>企業委外軟體開發</li>
                </Grid>
                <Grid item xs={6} md={4}>
                    <AdbIcon color="primary" fontSize="large"/>
                    <li className={classes.ServiceItem}>Android{' '}APP{' '}委外開發</li>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <ConstructionIcon color="primary" fontSize="large"/>
                    <li className={classes.ServiceItem}>工廠設備管理{' '}系統導入</li>
                </Grid>
            </Grid>
        </FormControl>
    );

}

export default ServiceItem;