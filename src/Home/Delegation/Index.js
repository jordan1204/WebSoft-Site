import Divider from '@mui/material/Divider';
import DeveloperTools from './DeveloperTools';
import ApplicationDomains from './ApplicationDomains';
import CustomHelmet from '../../CustomHelmet';
import { BASE_TITLE } from '../../Common';

const Index = () => {
    return (
        <>
            <CustomHelmet title={BASE_TITLE + "企業委外軟體開發"}/>
            <article>
                <h2>企業委外軟體開發</h2>
                <Divider style={{ borderColor: "rgba(0,0,0,0.5)" }} />
                <DeveloperTools />
                <ApplicationDomains />
            </article>
        </>
    );
}

export default Index;