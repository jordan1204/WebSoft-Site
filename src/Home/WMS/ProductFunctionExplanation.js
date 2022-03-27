import {ProductFunction} from '../../ListGroups/WMSs';

const ProductFunctionExplanation = ()=>{
    return (
        <ul>
           {
              ProductFunction.map(function(item){
                   return (
                       <>
                        <li>{item.Text}</li>
                        <ul>
                            {item.DetailList.map(function(detailitem){
                                return (
                                    <>
                                    <li>{detailitem.Text}</li>
                                    <ul>
                                        {   
                                            detailitem.FunctionList.map(function(functionitem){
                                                return (<li>{functionitem.Text}</li>);
                                            })
                                        }
                                    </ul>
                                    </>
                                )
                            })}
                        </ul>
                       </>
                   );
               })
           } 
        </ul>
    );
}

export default ProductFunctionExplanation