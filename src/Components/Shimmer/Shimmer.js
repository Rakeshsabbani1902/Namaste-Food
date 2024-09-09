import React from 'react'

const Shimmer = () => {
  return (
    <div>
       <div className='flex flex-wrap'>
            {Array(10).fill('').map((e,index) =>  <div key={index} className='h-80 w-80 m-8 border-4 p-4 rounded-xl border-gray-200' >
                <div  className="bg-gray-300 h-48 rounded-xl"></div>
                <div className="bg-gray-300 h-8 my-4 "></div>
                <div className="bg-gray-300 h-8 my-4"></div>
            </div> )}
           
        </div>
    </div>
  )
}

export default Shimmer