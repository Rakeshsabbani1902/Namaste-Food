import React, {  useState } from 'react'

import Logo from '../../Logo.png'
import { Link } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  // const[isLoggedIn, setIsLoggedIn] = useState(false)
  // const handleLogin=()=>{
  //   setIsLoggedIn(false)
    
  // }
  const [menuHide, setMenuHide] = useState(false)
  const cartItems = useSelector(store => store.cart.items )
  console.log(cartItems)
  return (
    <div className='flex  sticky items-center shadow-xl justify-between px-8'>
    <div>
      <Link to='/'>  <img className='h-32 ' src={Logo} alt="Logo"/></Link>
    </div>
    <div onClick={()=> setMenuHide(!menuHide)} className='text-3xl absolute right-8   cursor-pointer md:hidden'>
      {menuHide ? <AiOutlineClose/> :<AiOutlineMenu/>}
    </div>
    <div >
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-60 transition-all duration-500 ease-in ${menuHide ? "top-24" :"top-[-490px]"}`}>
           <Link to="/"><li className='md:ml-8 md:my-0 my-7 font-bold' onClick={()=>setMenuHide(false)}>Home</li></Link> 
           <Link to='/about'> <li className='md:ml-8 md:my-0 my-7 font-bold' onClick={()=>setMenuHide(false)}>About</li></Link>
           <Link to='/contact'> <li className='md:ml-8 md:my-0 my-7 font-bold' onClick={()=>setMenuHide(false)}>Contact</li></Link>
           <Link to='/cart'> <li className='md:ml-8 md:my-0 my-7 font-bold' onClick={()=>setMenuHide(false)}>Cart {cartItems.length < 1 ? null: <sup className='bg-red-600 text-white p-1 rounded-full'>{cartItems.length}</sup>}</li></Link>
           {/* <li>{user.name}</li> */}
          {/* {isLoggedIn ? <li onClick={()=>handleLogin()} className='px-6 font-bold text-lg'>LogIn</li>:<li onClick={()=>setIsLoggedIn(true)} className='px-6 font-bold text-lg'>LogOut</li>} */}
        </ul>
        
    </div>

    </div>
  )
}

export default Navbar