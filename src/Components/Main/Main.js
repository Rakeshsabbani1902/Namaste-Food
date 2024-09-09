import React, { useEffect, useState } from "react";
import { IMG_API_URL } from "../../Config/Config";
import { MAIN_API } from "../../Config/Config";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../Utils/Utils";
import { AiFillStar } from 'react-icons/ai';

// API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

const Main = () => {
  const [input, setInput] = useState("");
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      MAIN_API
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurantData(json?.data?.cards);
    setFilteredRestaurantData(json?.data?.cards);
  }

  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      searchData(input, allRestaurantData)
    }
  }
  

  const searchData = (input, restaurants) => {
    if (input !== "") {
      const data = filterData(input, restaurants);
      setFilteredRestaurantData(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`Sorry, we couldn't find any results for "${input}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurantData(restaurants);
    }
  };



  if (!allRestaurantData) return null;

  // if(filteredRestaurantData?.length===0) return <h1 style={{textAlign:'center'}}>Oops no Restaurant found !!</h1>

  return (
    <div>
      <div className="m-8 text-center">
        <input className="border border-red-600 w-1/3 p-2 rounded-l-lg"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <button className="bg-red-600 p-2 text-white border border-red-600 rounded-r-lg"
          onClick={() => {
            searchData(input, allRestaurantData);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div
          className="text-center"
        >
          {errorMessage}
        </div>
      )}

      {filteredRestaurantData?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurantData.map((dataList) => {
            return (
              <Link
                to={"/restaurant/" + dataList.data?.data?.id}
                key={dataList.data?.data?.id}
              >
                <div className="m-8  h-[25rem] w-80 shadow-2xl p-4 rounded-xl border-4 border-[#fdb913] hover:border-green-600">
                  <img className="h-48 w-auto rounded-lg"
                    src={ IMG_API_URL
                       +
                      dataList.data?.data?.cloudinaryImageId
                    }
                    alt="restraunt"
                  />
                  <h2 className="font-bold text-xl py-1 h-14">
                    {dataList.data?.data?.name}
                  </h2>
                  <p className="h-20">{dataList.data?.data?.cuisines.join(", ")}</p>
                  <div className="flex justify-between pt-3 items-center">
                    <h4 className="flex items-center p-4"
                      style={
                        dataList.data?.data?.avgRating < 4
                          ? {
                              backgroundColor: "red",
                              color: "white",
                              padding: "0.2rem",
                              borderRadius: "0.5rem",
                            }
                          : dataList.data?.data?.avgRating === "--"
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              padding: "0.2rem",
                              borderRadius: "0.5rem",
                            }
                          : {
                              backgroundColor: "green",
                              color: "white",
                              padding: "0.2rem",
                              borderRadius: "0.5rem",
                            }
                      }
                    >
                     <AiFillStar/> {dataList.data?.data?.avgRating} {" "}
                    </h4>
                    <h4> {dataList.data?.data?.costForTwoString}</h4>
                    <h4>{dataList.data?.data?.lastMileTravelString} </h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
