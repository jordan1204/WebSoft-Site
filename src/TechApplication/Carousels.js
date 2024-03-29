import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TechGroups from '../ListGroups/Techs';
import { makeStyles } from '@mui/styles';
import { useState} from 'react';
import TechExplanation from './TechExplanation';

const useStyles = makeStyles({
    CarouselItem: {
        textAlign: 'center',
    },
    CarouselContainer: {
        marginTop:"30px"
    },
    CarouselBtn: {
        borderStyle: "none",
        cursor: "pointer",
        backgroundColor: 'white',
        width:"50%"
    },
    Bordered: {
        borderStyle: "none",
    }
});


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Carousels = () => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(new Array(TechGroups.length).fill(true,0,1).fill(false,1,TechGroups.length));
    const [clickedindex, setIndex] = useState(0);
    const onClickCarouselItem = (index) => {
        for (let i = 0; i < clicked.length; i++){
            clicked[i] = false;
        }
        clicked[index] = true;
        setClicked([...clicked]);
        setIndex(index);
    }
    return (
        <>
            <Carousel responsive={responsive}
                draggble
                swipeable shouldResetAutoplay={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass={classes.CarouselItem}
                containerClass={classes.CarouselContainer}>
                {TechGroups.map(function (item, index) {
                    return (<button key={index} className={`${classes.CarouselBtn} ${clicked[index]?classes.Bordered:null}`} onClick={()=>onClickCarouselItem(index)}>
                        {item.Icon}
                        <div style={{marginTop:"20px",fontSize:"18px"}}>{item.Text}</div>
                    </button>);
                })}
            </Carousel>
            <TechExplanation imgs={TechGroups[clickedindex].Img} legendtext={TechGroups[clickedindex].Text} explanation={clickedindex>=0?TechGroups[clickedindex].Explanation:null}/>
        </>
    );
}

export default Carousels;