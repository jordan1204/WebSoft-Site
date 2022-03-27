import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import ServiceGroups from '../ListGroups/Services';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    ServiceItem: {
        listStyleType: 'none',
        "&:hover .icon":{
            transform:"translateY(-8px)"
        },
        "&:hover .light":{
            transform:"scaleX(1)"
        }
    },
    ServiceIcon: {
        textAlign: 'center',
        transform:"translateY(0px)",
        transition:"transform 0.7s",

    },
    Highlight: {
        height: "2px",
        width:"7rem",
        backgroundColor: 'blue',
        margin:"0 auto",
        transform:"scaleX(0)",
        transition:"transform 0.7s"
    },
    ServiceText: {
        fontSize: '18px',
        textAlign: 'center',
    },
    AnchorServiceItem: {
        textDecoration: "none",
        color:"black"
    }
  });

  const theme = createTheme({
    components: {
          MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: "7rem",
                    height: "7rem",
                    fontSize:"7rem"
                },
              },
        }
    },
});

const ServiceItem = () => { 
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <FormControl component="article" fullWidth>
            <h2>
                服務項目
            </h2>
            <Divider/>
            <Grid container spacing={8} component="ul">
                {
                    ServiceGroups.map(function (item,index) {
                        return (<Grid item xs={12} md={item.Width} component="li" className={classes.ServiceItem} key={index}>
                            <Link to={item.Href} className={classes.AnchorServiceItem}>
                                    <figure className={`${classes.ServiceIcon} icon`}>
                                        {item.Icon}
                                    </figure>
                                    <div className={`${classes.Highlight} light`}></div>
                                    <div className={classes.ServiceText}>{item.Text}</div>
                                </Link>
                                </Grid>);
                     })   
                }
               
            </Grid>
            </FormControl>
            </ThemeProvider>
    );

}

export default ServiceItem;