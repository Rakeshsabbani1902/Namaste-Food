import { useDispatch, useSelector } from 'react-redux'
import FoodList from './FoodList'
import { clearCart } from '../../../Utils/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  const handlePayment=()=>{
    alert("Payment done ")
  
  }
  return (
    
    <div className=' w-full rounded-xl md:px-[25%] px-4 my-11 p-4 shadow-2xl'> 
      {cartItems.length < 1 ? <h1 className='font-bold text-red-600 text-4xl text-center py-5'> Please Add Items in the cart First 😔</h1> :(
        <div>
      <h1 className='font-bold  text-4xl text-center py-5'>Cart Items</h1>
      
      {cartItems.map((item)=> (
        <>
      <FoodList key={item.id} {...item}/>
      </>
      ))}
      <button onClick={()=>handleClearCart()} className="bg-red-600 text-white px-8 py-2 my-3 ">Clear Cart</button>
      <h4 className='bg-green-600 px-8 py-2 font-bold text-white text-center '>Total Amount : ₹
            { cartItems.map((item) => (item?.price) / 100)
                .reduce((acc, curr) => acc + curr, 0)
                .toFixed(2)}</h4>
                <div className='flex justify-around my-4'>
              <Link to="/">    <button className='bg-yellow-400 rounded-lg p-3'>Want More 😋</button> </Link>
                  <button onClick={()=>handlePayment()} className='bg-blue-700 text-white rounded p-3'>Proceed to Pay</button>
                </div>
       </div>)
    }
    </div>
  )
}

export default Cart