import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Domains from '../../ListGroups/Domains';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme} from '@mui/material/styles';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
    Explanation: { 
        fontSize:"16px"
    },
    Img: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#000",
        borderRadius:"50%"
    }
  });

const ApplicationDomains = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Paper component="fieldset" elevation={6} sx={{marginTop:"50px",marginBottom:"25px"}}>
            <legend className={classes.LegendText}>應用Domain</legend>
            <Grid container>
                {
                    Domains.map(function (item, index) {
                        const itemstyle = {};
                        if (matches) {
                            if (index % 3 === 0) {
                                itemstyle.paddingRight = "10px";
                            }
                            else if (index % 3 === 1) {
                                itemstyle.paddingRight = "10px";
                                itemstyle.paddingLeft = "10px";
                            }
                            else {
                                itemstyle.paddingLeft = "10px";
                            }
                        }
                        else {
                            itemstyle.paddingBottom = "10px";
                        }
                        
                        return (
                            <Grid item xs={12} md={4} style={itemstyle}>
                                <div>
                                    <img src={item.Src} alt={item.Alt} style={{ width: "100%" }} height={matches ? "256" : "180"} className={classes.Img}/>
                                </div>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Paper>
    );
}

export default ApplicationDomains;