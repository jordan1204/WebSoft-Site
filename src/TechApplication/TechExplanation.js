import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme} from '@mui/material/styles';


const useStyles = makeStyles({
    LegendText: {
        fontSize:"18px"
    },
    Explanation: { 
        fontSize:"16px",
    },
    ExplanationContainer:{
        marginTop:"50px",
        minHeight:"237px",
        marginBottom:"25px",
        borderStyle:"none"
    },
    Img:{
        filter:"grayscale(100%)"
    },
    ImgMd:{
        width:"50%"
    },
    ImgXs:{
        width:"100%"
    }
  });

const TechExplanation = ({ legendtext, explanation,imgs }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Paper component="fieldset" elevation={1} className={classes.ExplanationContainer}>
            <legend className={classes.LegendText}>{legendtext}</legend>
            <p classes={classes.Explanation}>
                {explanation}
                {
                imgs.map(function(item,index){
                    return <img key={index} src={item.Src} className={`${matches?classes.ImgMd:classes.ImgXs} ${classes.Img}`}/>
                })
            }
            </p>
           
        </Paper>
    );
}

export default TechExplanation;