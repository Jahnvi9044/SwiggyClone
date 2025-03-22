import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Card = React.memo( function({res}) {
  
  
    // console.log(res);
    
    // const [id,name,cloudinaryImageId,
    //     locality,
    //     areaName,
    //     costForTwo,
    //     cuisines  ] = res;

    let offer = res?.aggregatedDiscountInfoV3?.header + res?.aggregatedDiscountInfoV3?.subHeader;
    let time = Math.round(res?.sla?.deliveryTime/5)*5;
    // console.log(offer);
    let rating = (res?.avgRating)? res?.avgRating : 0.0;
    return (
    <NavLink to={`/resturant/${res?.id}`}>
    <div className=" transform transition-transform duration-280 hover:scale-95 p-4 m-2 flex flex-col justify-start items-start  w-64   rounded-md"> 
      <div className=" relative w-[250px] h-[180px] rounded-2xl overflow-hidden shadow-xl shadow-slate-300">
         <img
          className="w-full h-auto object-cover"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res?.cloudinaryImageId}
          alt="Burger Image"
         />
         {/* Gradient Overlay */}
         <div>
           { (offer)?<h1 className=' text-white absolute z-10 bottom-1  text-xl left-3 font-extrabold'>{offer}</h1>:""
           }
         </div>
         <div className="absolute  inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
        {/* Content of card */ }
        <div className='px-4 py-4'>
        <h1 className='text-lg font-bold'>{res?.name}</h1>
        <div className='flex space-x-2'>
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" >
            <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 
            5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" 
            fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
            <h3 className='font-semibold'>{rating} </h3>           
           <h3 className='font-medium'>{time-5}-{time} mins</h3>
        </div>
        <h3 className='font-bold'>{res?.costForTwo}</h3>
        
        { 
          (res.locality!=res.areaName)?
          <>
            <h3 className='text-slate-500 font-medium' >{res?.locality}</h3>
            <h3 className='text-slate-500  font-medium '>{res?.areaName}</h3>
          </>:          
            <h3 className='text-slate-500 font-medium' >{res?.locality}</h3>
       }
        </div>
        
    </div>
    </NavLink>
  )
}
)

export default Card