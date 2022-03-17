import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import Menu from './Menu';
import Logo from './Logo';
import { useState } from 'react';
import BackgroundSlider from 'react-background-slider';
import webbanner01 from '../img/Banners/webbanner01.png';
import webbanner02 from '../img/Banners/webbanner02.png';
import webbanner03 from '../img/Banners/webbanner03.png';
import webbanner04 from '../img/Banners/webbanner04.png';
import webbanner05 from '../img/Banners/webbanner05.png';

const useStyles = makeStyles({
    Header: {
        width: "100%",
        position: "relative",
        backgroundColor:"#bac4e8"
    },
});

const MobileHeader = () => {
    const classes = useStyles();
    const bannerlist = [webbanner01, webbanner02,webbanner03,webbanner04,webbanner05];
    const [open, setOpen] = useState(false);
    const ToggleMenu = () => {
        setOpen((prev) => !prev);
    }
    return (
        <>
        <header className={classes.Header}>
            <Logo />
            <Collapse in={open} timeout="auto">
                <Menu />
            </Collapse>
            <IconButton onClick={ToggleMenu} style={{ position:'absolute',
        right: "20px",
        top:"10px",
        width: "3rem",
                height: "3rem",
            }}><MenuIcon style={{width: "3rem",
            height: "3rem",
                        fontSize: "3rem"
                    }} /></IconButton>
                
            </header>
            <article style={{width:"100%",position:'relative',height:window.screen.width*0.41+"px"}}>
                <BackgroundSlider
                images={bannerlist}
                duration={6}
                transition={2}
                />
            </article>
        </>
    );
}

export default MobileHeader;