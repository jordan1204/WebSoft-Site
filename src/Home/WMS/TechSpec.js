import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import {TechSpecObj} from '../../ListGroups/WMSs';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
});


const TechSpec = ()=>{
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>技術規格</legend>
            <div>
                <img src={TechSpecObj.Src}/>
            </div>
        </Paper>
    );
}

export default TechSpec;