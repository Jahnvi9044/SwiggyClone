import React from 'react'

const Shipping = React.memo(function({handler}){

   console.log(" Shipping "+handler);
    console.log("Hey Shipping is called ");
  return (
    <div>Shipping</div>
  )
}
);

export default Shipping