import Divider from '@mui/material/Divider';
import Carousels from './Carousels';


const Index = () => {
    return (
        <article>
            <h2>技術應用</h2>
            <Divider style={{borderColor:'rgba(0,0,0,0.5)'}}/>
          <Carousels />
        </article>
    );
}

export default Index;