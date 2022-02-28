import Container from '@mui/material/Container';
import Menu from './Menu';
import Logo from './Logo';
import ServiceItem from './ServiceItem';
import Customers from './Customers';
import Footer from './Footer';

const Index = () => { 
    return (
        <Container maxWidth="lg">
            <Logo/>
            <Menu/>
            <ServiceItem />
            <Customers />
            <Footer/>
        </Container>
    );

}

export default Index;