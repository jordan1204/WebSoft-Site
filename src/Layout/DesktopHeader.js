import Menu from './Menu';
import Logo from './Logo';
import BackgroundSlider from 'react-background-slider';
import { makeStyles } from '@mui/styles';
import webbanner01 from '../img/Banners/webbanner01.png';
import webbanner02 from '../img/Banners/webbanner02.png';
import webbanner03 from '../img/Banners/webbanner03.png';
import webbanner04 from '../img/Banners/webbanner04.png';
import webbanner05 from '../img/Banners/webbanner05.png';

const useStyles = makeStyles({
    Header: {
        width: "100%",
        position: "relative",
        backgroundColor:"#FFFFFF"
   },
});


const DesktopHeader = () => {
    const classes = useStyles();
    const bannerlist = [webbanner01, webbanner02,webbanner03,webbanner04,webbanner05];
    return (
        <>
        <header className={classes.Header}>
            <Logo />
            <Menu />
            <BackgroundSlider
                images={bannerlist}
                duration={6}
                transition={2}
            />
        </header>
        <article style={{width:"100%",position:'relative',height:window.screen.width*0.41+"px",marginBottom:"100px"}}>
            <BackgroundSlider
            images={bannerlist}
            duration={6}
            transition={2}
            />
        </article>
        </>
    );
}

export default DesktopHeader;