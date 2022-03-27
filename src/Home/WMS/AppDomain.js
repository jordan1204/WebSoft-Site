import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import AppDomainExplanation from './AppDomainExplanation';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
});

const AppDomain = ()=>{
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>應用領域</legend>
            <AppDomainExplanation/>
        </Paper>
    );
}

export default AppDomain;