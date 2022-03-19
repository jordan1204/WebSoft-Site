import ServiceItem from './ServiceItem';
import Customers from './Customers';
import CustomHelmet from '../CustomHelmet';
import { BASE_TITLE } from '../Common';

const Index = () => { 
    return (
        <>  
            <CustomHelmet title={BASE_TITLE + "首頁"}/>     
            <ServiceItem />
            <Customers />
         </>
    );

}

export default Index;