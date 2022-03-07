import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import ServiceGroups from '../DataBaseTables/Service';

const useStyles = makeStyles({
    ServiceItem: {
        listStyleType: 'none',
    },
    Transform: {
        animationName: "$iconTranslate",
        animationTimingFunction: "linear",
        animationDuration: "0.2s",
        animationFillMode:"forwards",
    },
    ServiceIcon: {
        textAlign: 'center',
    },
    Highlight: {
        height: "1px",
        width:"7rem",
        backgroundColor: 'blue',
        margin:"0 auto"
    },
    HighlightScale: {
        animationName: "$scaleAnimation",
        animationTimingFunction: "linear",
        animationDuration: "0.2s"
    },
    "@keyframes scaleAnimation": {
        "0%": {
            transform: "scaleX(0.2)",
        },
        "25%": {
            transform:"scaleX(0.4)"
        },
        "50%": {
            transform:"scaleX(0.6)"
        },
        "75%": {
            transform:"scaleX(0.8)"
        },
        "100%": {
            transform: "scaleX(1.0)",
        },
    },
    "@keyframes iconTranslate": {
        "0%": {
            transform: "translateY(0px)",
        },
        "25%": {
            transform:"translateY(-2px)"
        },
        "50%": {
            transform:"translateY(-4px)"
        },
        "75%": {
            transform:"translateY(-6px)"
        },
        "100%": {
            transform: "translateY(-8px)",
        },
    },
    ServiceText: {
        fontSize: '18px',
        textAlign: 'center'
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

    const checkedarray = new Array(ServiceGroups.length).fill(false);
    const [fades, setFades] = useState(checkedarray);
    const AnimateServiceItem = function (i) {
        fades[i] = true;
        setFades([...fades]);
    }
    const RestoreServiceItem = function (i) {
        fades[i] = false;
        setFades([...fades]);
    }
    return (
        <ThemeProvider theme={theme}>
        <FormControl component="article" fullWidth>
            <h2>
                服務項目
            </h2>
            <Divider />
            <Grid container spacing={8} component="ul">
                {
                    ServiceGroups.map(function (item,index) {
                        return (<Grid item xs={12} md={item.Width} component="li" className={classes.ServiceItem} onMouseEnter={() => AnimateServiceItem(index)} onMouseLeave={() => RestoreServiceItem(index)} key={index}>
                                    <div className={`${classes.ServiceIcon} ${fades[index] ? classes.Transform : ""}`}>
                                        {item.Icon}
                                    </div>
                                    <div style={{display:fades[index]?"block":"none"}}className={`${classes.Highlight} ${fades[index]?classes.HighlightScale:""}`}></div>
                                    <div className={classes.ServiceText}>{item.Text}</div>
                                </Grid>);
                     })   
                }
               
            </Grid>
            </FormControl>
            </ThemeProvider>
    );

}

export default ServiceItem;