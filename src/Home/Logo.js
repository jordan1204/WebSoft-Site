import logo from '../img/logo.png';
import Box from '@mui/material/Box';

const Logo = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <h2>匯融科技</h2>
        </Box>
    );

}

export default Logo;