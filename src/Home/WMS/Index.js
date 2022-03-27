import CustomHelmet from '../../CustomHelmet';
import { BASE_TITLE } from '../../Common';
import Divider from '@mui/material/Divider';
import Feature from './Feature';
import TechSpec from './TechSpec';
import AppDomain from './AppDomain';
import ProductFunction from './ProductFunction';

const Index = ()=>{
    return (
        <>
            <CustomHelmet title={BASE_TITLE + "WMS系統導入"}/>
            <article>
                <h2>WMS系統導入</h2>
                <Divider />
                <Feature/>
                <TechSpec/>
                <AppDomain/>
                <ProductFunction/>
            </article>
        </>
    );
}

export default Index;