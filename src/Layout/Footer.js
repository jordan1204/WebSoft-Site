import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles({
    Footer: {
        paddingLeft:'16px'
    },
    PhoneNumber: {
        fontSize: '1em',
        color:'gray'
    },
    AddressText: {
        fontSize: '1em',
        color:'gray'
    },
    Phone: {
        fontSize: '18px',
    },
    Address: {
        fontSize: '18px',
    },
    CopyRight: {
        fontSize: "12px",
        marginTop:"15px"
    }
  });

const Footer = () => { 
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Paper elevation={6} sx={{
            marginTop: '50px',
            paddingTop:"20px",
            paddingBottom:"30px"
        }}>
            <footer className={classes.Footer}>
                <div style={matches ? { width: "60%",margin:"0 auto" } : {width:"100%"}}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <div className={classes.Address}>
                                公司地址
                            </div>
                            <div className={classes.AddressText}>
                                新竹縣竹北市光明三路62號2F
                            </div> 
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={classes.Phone}>
                                連絡電話
                            </div>
                            <div className={classes.PhoneNumber}>
                                03-6681293
                            </div> 
                        </Grid>
                    </Grid>
                    <div className={classes.CopyRight}>
                        Copyright © {new Date().getFullYear()} WebSoft. All Rights Reserved.
                    </div>
                </div>
        </footer>
        </Paper>
    );

}

export default Footer;