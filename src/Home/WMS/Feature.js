import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import FeatureExplanation from './FeaureExplanation';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
});


const Feature = ()=>{
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>產品特色</legend>
            <div>
                <FeatureExplanation/>
            </div>
        </Paper>
    );
}

export default Feature;