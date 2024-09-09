import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className=' bg-black text-white text-center py-4 w-full sm:w-full md:w-full'>
        <p> No © copyright issues. Feel free to copy. If you need any help, <Link to='https://www.linkedin.com/in/ankit-payal-dev/' target="_blank"> ping me !</Link></p>
        <p>Made by Ankit Payal with ❤</p>
    </div>
  )
}

export default Footer