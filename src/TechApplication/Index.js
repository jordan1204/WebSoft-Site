import Divider from '@mui/material/Divider';
import Carousels from './Carousels';
import { BASE_TITLE } from '../Common';
import CustomHelmet from '../CustomHelmet';

const Index = () => {
    return (
        <>
            <CustomHelmet title={BASE_TITLE+"技術應用"}/>
            <article>
                <h2>技術應用</h2>
                <Divider style={{borderColor:'rgba(0,0,0,0.5)'}}/>
                <Carousels />
            </article>
        </>
    );
}

export default Index;