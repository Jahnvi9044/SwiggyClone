import { useState,useEffect } from 'react'
import { Product } from './Practice/Product'


function App() {
  const [count,setCount] = useState(0);
  const [title,setTitle] = useState(0);

  
  // This useEffect runs after the App component renders the 1st time .Not on re-renders .This will not run after re-renders
  useEffect(()=>{
    setCount(count => count+100 );
 },[]);


  // This useEffect runs after the body component renders  1st time + when the count changes . Not runs after rerenders.
  useEffect(()=>{
      console.log("1222") 
  },[count]);
  
 
   function changeTitle()
   {
    setTitle(title=>title+1);
   }

  function handleCount()
  {  
     setCount(count =>count+1);
     console.log("count",count);  
  }

  console.log(count);
  return (
    <div className="items-center text-center m-5">
     <h1 className="text-3xl font-bold underline bg-red-500">
      Hello world!
    </h1>

    <button onClick={handleCount} className='m-2 rounded-md  border-2 p-2 border-black active:border-gray-500' >Increase Count </button>
    <button onClick={changeTitle} className='m-2 rounded-md  border-2 p-2 border-black active:border-gray-500' >Increase title </button>
    
         <div className="flex items-center">
         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  "> 
            <div className="flex flex-col justify-center h-full font-semibold  ">
              {count}
            </div>
          </div>
          <div className=" flex flex-col justify-center h-full ml-4 font-normal">
            Count
          </div>
         </div> 
         <div className="flex items-center">
         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  "> 
            <div className="flex flex-col justify-center h-full font-semibold  ">
              {title}
            </div>
          </div>
          <div className=" flex flex-col justify-center h-full ml-4 font-normal">
            title
          </div>
         </div> 

         <Product count={count}  title={title}></Product>
    </div>
  )
}

export default App
