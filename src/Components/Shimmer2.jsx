import React from 'react'

const Shimmer2 = () => {
  return (
    <ShimmerInner/>
  )
}

function  ShimmerInner(){
   
 return (
    
    <div className="flex justify-center my-10">
     <div className="flex flex-col items-start justify-center">
      <div className="bg-slate-200 animate-blink p-4 m-2 w-32 h-3 rounded-xl"></div>
      <div className="bg-slate-200 animate-blink p-4 m-2 w-[600px] h-36 rounded-xl">

      </div>
      <div className="bg-slate-200 animate-blink p-4 m-2 w-60 h-4 rounded-xl"></div>

      <div className="flex flex-row flex-wrap justify-center my-10">
        <div className="bg-slate-200 animate-blink p-4 m-2 w-52 h-16 rounded-xl"></div>
        <div className="bg-slate-200 animate-blink p-4 m-2 w-52 h-16 rounded-xl"></div>
        <div className="bg-slate-200 animate-blink p-4 m-2 w-52 h-16 rounded-xl"></div>
       
      </div>
    </div>
  </div>


     )
}

export default Shimmer2