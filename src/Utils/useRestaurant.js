import { useEffect, useState } from "react";
// import { RESTAURANT_MENU_API } from "../Config/Config";
const useRestaurant =(id)=>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){
         const data = await fetch(`https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`)
        const json = await data.json()
        // console.log(json.data)
        setRestaurant(json.data)
    }
    return restaurant
}
export default useRestaurant;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&&submitAction=ENTER&restaurantId=463461