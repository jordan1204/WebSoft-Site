import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import ProductFunctionExplanation from './ProductFunctionExplanation';

const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
});


const ProductFunction = ()=>{
    const classes = useStyles();
    return (
        <Paper component="fieldset" elevation={1} sx={{marginTop:"50px",marginBottom:"25px",borderStyle:"none"}}>
            <legend className={classes.LegendText}>產品功能</legend>
            <ProductFunctionExplanation/>
        </Paper>
    );
}

export default ProductFunction;