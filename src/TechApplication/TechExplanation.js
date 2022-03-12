import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
    Explanation: { 
        fontSize:"16px"
    }
  });

const TechExplanation = ({ legendtext, explanation }) => {
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={6} sx={{marginTop:"50px",height:"237px",marginBottom:"25px"}}>
            <legend className={classes.LegendText}>{legendtext}</legend>
            <p classes={classes.Explanation}>
                {explanation}
            </p>
        </Paper>
    );
}

export default TechExplanation;