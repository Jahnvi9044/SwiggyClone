import React, { useState, useEffect } from "react";
import Card from "./Card";
import { resData } from "../Constants/resData";
import Shimmer from "./Shimmer";
import OrderNow from "./OrderNow";

const Body = () => {
//   const initialData = resData?.data?.cards[0]?.card.card.gridElements.infoWithStyle.restaurants || [];
  const [filteredList, setFilteredList] = useState([]);
  const [data3, setData3] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [toggle, setToggle] = useState(true);
   
  const [searchText,setSearchText] = useState("hi");


  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(
          "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/"
        );
        const json = await response.json();

        if (isMounted) {
          let fetchedData = resData.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants.concat(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ) || [];

          // Remove duplicates
          const uniqueData = Array.from(new Map(fetchedData.map(item => [item.info.id, item])).values());
          setData3(uniqueData);
          setFiltered(uniqueData.filter(item => item.info.avgRating >= 4.4));
          setFilteredList(uniqueData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
 

//Conditional rendering  - rendering on the basis of condition is called conditional rendering 
 
  return filteredList.length===0? <Shimmer/>: (
    <>
      <button
        onClick={() => {
          setToggle(toggle => !toggle);
          toggle ? setFilteredList(filtered) : setFilteredList(data3);
        }}
        className="border w-28 p-1 font-semibold rounded-md ml-4 m-3"
      >
        {toggle ? "High Rating" : "All"}
      </button>

      <input type="text" 
        placeholder="Search" 
        className="border rounded-sm" 
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}
        />
      <button 
      onClick={()=>
        {
            // console.log({searchText})

            const searchFilter = data3.filter((item)=> item.info?.name.toLowerCase().includes( searchText.toLowerCase() ));
            // console.log(searchFilter)
            setFilteredList(searchFilter);
        }}
      >Search</button>

      <div className="flex flex-wrap justify-center space-x-4">
        {filteredList.map(item => (
          <Card key={item.info.id} res={item.info} />
        ))}
      </div>

      <OrderNow></OrderNow>
    </>
  );
};

export default Body;
