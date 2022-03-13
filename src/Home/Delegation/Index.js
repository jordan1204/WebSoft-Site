import Divider from '@mui/material/Divider';
import DeveloperTools from './DeveloperTools';
import ApplicationDomains from './ApplicationDomains';

const Index = () => {
    return (
        <article>
            <h2>企業委外軟體開發</h2>
            <Divider style={{ borderColor: "rgba(0,0,0,0.5)" }} />
            <DeveloperTools />
            <ApplicationDomains/>
        </article>
    );
}

export default Index;