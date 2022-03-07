import Menu from './Menu';
import Logo from './Logo';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
const PageLayout = () => {
    return (
        <Container maxWidth="xl">
            <Logo />
            <Menu />
            <Outlet/>
        </Container>
    );
}

export default PageLayout;