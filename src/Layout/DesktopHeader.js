import Menu from './Menu';
import Logo from './Logo';
import BackgroundSlider from 'react-background-slider';
import { makeStyles } from '@mui/styles';
import webbanner01 from '../img/Banner/webbanner01.png';
import webbanner02 from '../img/Banner/webbanner02.png';
import webbanner03 from '../img/Banner/webbanner03.png';
import webbanner04 from '../img/Banner/webbanner04.png';
import webbanner05 from '../img/Banner/webbanner05.png';

const useStyles = makeStyles({
    Header: {
        width: "100%",
        position: "relative",
        height:'510px'
   },
});


const DesktopHeader = () => {
    const classes = useStyles();
    const bannerlist = [webbanner01, webbanner02,webbanner03,webbanner04,webbanner05];
    return (
        <header className={classes.Header}>
            <Logo />
            <Menu />
            <BackgroundSlider
                images={bannerlist}
                duration={6}
                transition={2}
            />
        </header>
    );
}

export default DesktopHeader;