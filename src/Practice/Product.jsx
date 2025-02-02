import React, { useCallback,useEffect } from 'react'
import Shipping from './Shipping';
export const Product = ({count,title}) => {
  

  


   const  handler = useCallback(()=>
    {
        console.log(count);
    },[title]);

    console.log("Product ",handler);

  
    return (

    <div>
        <Shipping handler={handler}></Shipping>
    </div>
  )
}
