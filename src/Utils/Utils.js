export function filterData(input,restaurantData){
    const filter = restaurantData.filter((restaurant)=> restaurant?.data?.data?.name?.toLowerCase()?.includes(input.toLowerCase()));
    return filter;
   }