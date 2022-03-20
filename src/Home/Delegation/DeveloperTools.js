import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Tools from '../../ListGroups/Tools';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
    Explanation: { 
        fontSize:"16px"
    },
    Img: {
        maxWidth: "100%",
        height:"155px"
    }
  });

const DeveloperTools = () => {
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>開發技能</legend>
            <Grid container style={{ paddingLeft: "40px", paddingRight: "40px" }} spacing={4}>
                {
                    Tools.map(function (item,index) {
                        return (
                            <Grid item xs={12} lg={3}  key={index}>
                                <figure style={{textAlign:"center"}}>
                                    <img src={item.Src} alt={item.Alt} className={classes.Img} style={{filter: "grayscale(100%)"}}/>
                                </figure>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Paper>
    );
}

export default DeveloperTools;