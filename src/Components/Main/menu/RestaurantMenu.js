// import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { IMG_API_URL } from '../../../Config/Config'
import Shimmer from '../../Shimmer/Shimmer'
import useRestaurant from '../../../Utils/useRestaurant'
import { addItem } from '../../../Utils/cartSlice'
import { useDispatch } from 'react-redux'
// import { removeCart } from '../../../Utils/cartSlice'
const RestaurantMenu = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const handleAddButton =(item)=>{
      dispatch(addItem(item))
    }

  const restaurant = useRestaurant(id)

  return (!restaurant) ? <Shimmer/> : (
    
<div className=' place-content-center my-12'>
 <h2 className='font-bold text-4xl text-center  text-red-500'>Menu List</h2>

    {Object.values(restaurant.menu.items).map((item)=>(
        <div key={item?.id} className="flex shadow-lg rounded-xl place-content-center mx-[20%] my-4 py-2 border-b-2 border-gray-400 items-center  ">

            <div className='w-3/5 mr-8'>
            <h5 className='font-bold text-xl'>{item?.name} </h5>
            <p>{item?.description}</p>
            <h4 className='font-bold text-red-500 mt-4'>₹ {(item?.price/100).toFixed(2)}</h4>
            </div>

            <div >
           <img className='h-32' src={IMG_API_URL + item?.cloudinaryImageId} alt={item?.name}/> <br/>
            <button className='bg-green-600 text-white px-4 py-2 text-center w-full' onClick={()=>handleAddButton(item)} >Add to cart</button>
            </div>
            
        </div>
    ))}
</div>

  )
}
// "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=594707"

export default RestaurantMenu