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
    ImgLg: {
        width: "80%",
        height:"185px"
    },
    ImgXs: {
        width:"85%",height:"210px"
    },
    ImgCaption: {
        fontWeight: "700",
        fontSize:"20px"
    },
    ContainerLg: {
        paddingLeft: "40px",
        paddingRight:"40px"
    },
    ContainerXs: {
        paddingLeft: "5px",
        paddingRight:"5px"
    }
  });

const ApplicationDomains = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>應用Domain</legend>
            <Grid container className={ `${matches?classes.ContainerLg:classes.ContainerXs}`} spacing={4}>
                {
                    Domains.map(function (item, index) {
                        
                        return (
                            <Grid item xs={12} lg={4} key={index}>
                                <figure style={{textAlign:"center"}}>
                                    <img src={item.Src} alt={item.Alt} className={`${matches ? classes.ImgLg : classes.ImgXs}`} style={{ filter: "grayscale(100%)" }} />
                                    <figcaption className={classes.ImgCaption}>{item.Caption}</figcaption>
                                </figure>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Paper>
    );
}

export default ApplicationDomains;