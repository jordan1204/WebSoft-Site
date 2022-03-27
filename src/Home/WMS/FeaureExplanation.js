import {features} from '../../ListGroups/WMSs';

const FeatureExplanation = ()=>{
    return (
        <ul>
            {
                features.map(function(item){
                    return <li>{item.Text}</li>
                })
            }
        </ul>
    );
}

export default FeatureExplanation;