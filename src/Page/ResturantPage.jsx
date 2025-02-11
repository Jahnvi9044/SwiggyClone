import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import {resData} from '../Constants/resData'
import Shimmer2 from '../Components/Shimmer2';



const ResturantPage = () => {
    const [resturant,setResturant] = useState("");
    const [menu , setMenu] =useState([]);
    const [isActive,setIsActive] =useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [menuReal,setMenuReal] =useState(false);
    const {id} = useParams();

    useEffect(()=>{
        fetchData()
        fetchMenuData()
    
    },[])
    

    async function fetchMenuData(){
        const response = await fetch(`https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3274072&lng=83.0277459&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        
        const json = await response.json();
        console.log("menue:",json);
        const realmenu =json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards||json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        ||json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards;
        console.log("RealMenue",realmenu);
        setMenu(realmenu);
        setMenuReal(realmenu);
        

   
    }

    async function fetchData(){
      try
      {
          const response = await fetch('https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3274072&lng=83.0277459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
         
          const json = await response.json();
          console.log("res:",json);
          
          const data3 = resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants.concat(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
          
            console.log("res:",data3);
        
         for(const item of data3)
         {
            if(item.info.id == id)
             {   
                  setResturant( item.info );
                  break ; 
             }
         }      
        }
      catch(e){
          console.error(e);
      }
    } 

   
    
   
    let rating = (resturant?.avgRating)?resturant?.avgRating:3.8;
    
  return resturant.length===0? <Shimmer2/>: (
    <div>
          "Resturant id :"{id}
          <div className='flex justify-center'>
          <div className='flex flex-col items-start justify-center'>


               <h1 className='font-extrabold md:text-2xl text-xl text-start px-9'>{resturant?.name}</h1>
               
                 
               <div className='w-[340px] h-[160px] sm:w-[630px] rounded-b-[30px] m-4 bg-slate-200 flex items-start justify-center bg-gradient-to-b from-white via-transparent to-transparent '>
                <div className='w-[310px] h-36  sm:w-[600px] border rounded-3xl bg-white'>

                <div className='flex space-x-2 p-3 items-center'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" >
                  <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 
                   5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" 
                   fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs>
                 </svg>
                 
                  <h3 className='font-semibold text-sm md:text-base'>{rating}, ({resturant?.totalRatingsString}rating)</h3>           
                
                  <h3 className='font-bold pl-3 text-sm md:text-base'>{resturant.costForTwo}</h3>
                </div>
                  

                <h3 className='font-bold text-[#ff5200] mx-4 underline text-sm  '>{resturant?.cuisines?.join(', ')}</h3>
              
               <div  className="mx-4  mt-2 flex items-center ">
                <div className='bg-slate-500 w-2 h-2 rounded-full mr-3'></div>

                <div className='flex  items-center '>
                
                 <h1 className='font-semibold text-sm md:text-base'>Outlet</h1>
                 <h1 className=" text-slate-500 text-sm px-2">{resturant.areaName}</h1>
                
                </div>
               </div>


               <div  className="mx-4 flex items-center ">
                <div className='bg-slate-500 w-2 h-2 rounded-full mr-3'></div>
                <h3 className='font-medium text-sm md:text-base'> {resturant?.sla?.slaString}</h3>
               </div>
                </div>
               </div>
               
             
  


{/* >>>>>>>>>>>>>> */}
<div className='flex mx-auto space-x-4 items-center justify-between w-60  my-5'>

  <div className="flex items-center p-1">
    {/* Veg and Non-Veg Indicator */}
    {isActive ? (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="#008000" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="6" fill="#008000" />
      </svg>
    ) : (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="#FF0000" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="6" fill="#FF0000" />
      </svg>
    )}

    {/* Toggle Button */}
    <button
      onClick={() => {
        setIsActive(!isActive);
        const filteredMenu = menuReal.filter(
          (item) => item.card.info.itemAttribute.vegClassifier === (isActive ? "NONVEG" : "VEG")
        );
        setMenu(filteredMenu);
      }}
      className='font-bold px-2 min-w-[80px]'
    >
      {isActive ? "Veg" : "Non-Veg"}
    </button>
  </div>

  {/* Show All Button */}
  <button
    onClick={() => {
      setMenu(menuReal);
    }}
    className='font-bold px-2 min-w-[80px]'
  >
    All
  </button>
</div>





{/* ................. */}

         <div className="px-10">
         {/* Dropdown Button */}
         <button 
           className="font-bold px-10 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
           onClick={() => setIsOpen(!isOpen)}
          >
           Menu {isOpen ? "▲" : "▼"}
         </button>

          {/* Dropdown Menu */}
         {isOpen && (
          <div className="mt-2 bg-white shadow-md rounded-md p-3">
           {menu.map((item) => (
             <h1 key={item?.card?.info?.id} className="text-slate-600 text-sm md:text-base font-semibold">
              → {item?.card?.info?.name}
             </h1>
           ))}
         </div>
       )}
      </div>
           </div>
           </div>
        

            {/* Footer */}
            <div className='h-96'></div>
  
    </div>
  )
}

export default ResturantPage