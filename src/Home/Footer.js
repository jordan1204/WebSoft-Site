import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    Footer: {
        paddingLeft:'16px'
    },
    Address: {
        marginBottom: '2em',
        fontSize:'18px'
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
        fontSize:'18px'
    }
  });

const Footer = () => { 
    const classes = useStyles();
    return (
        <Paper elevation={6} sx={{
            marginTop: '50px',
            paddingTop:"20px",
            paddingBottom:"30px"
        }}>
        <Grid container component="footer" className={classes.Footer}>
            <Grid item xs={12} md={4}>
                
            </Grid>
            <Grid item xs={12} md={4}>
                <div className={classes.Address}>
                    <div>
                        公司地址
                    </div>
                    <div className={classes.AddressText}>
                        新竹縣竹北市光明三路62號 2F
                    </div>
                </div>
                <div>
                    <div className={classes.Phone}>
                        連絡電話
                    </div>
                    <div className={classes.PhoneNumber}>
                        036681293
                    </div> 
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                
            </Grid>
            </Grid>
        </Paper>
    );

}

export default Footer;