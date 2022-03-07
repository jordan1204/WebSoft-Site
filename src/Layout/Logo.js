import logo from '../img/logo.png';
import Link from '@mui/material/Link';

const Logo = () => {
    return (
        <Link sx={{ display: 'flex',color:"black" }} href="/" underline="none">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <h1>匯融科技</h1>
        </Link>
    );

}

export default Logo;