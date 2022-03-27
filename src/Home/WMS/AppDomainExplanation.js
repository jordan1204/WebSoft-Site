import {AppDomain} from '../../ListGroups/WMSs';

const AppDomainExplanation = ()=>{
    return (
        <ul>
           {
               AppDomain.map(function(item){
                   return (
                       <>
                        <li>{item.Text}</li>
                        <ul>
                            {item.InstanceList.map(function(item){
                                return <li>{item.Text}</li>
                            })}
                        </ul>
                       </>
                   );
               })
           } 
        </ul>
    );
}

export default AppDomainExplanation;