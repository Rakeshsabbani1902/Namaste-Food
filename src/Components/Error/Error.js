import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div className='grid place-items-center'>
        <img className='' src="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLSmloIQxmAROZr059PgIoN0gQO04ZeBZPw&usqp=CAU
        " alt="error"/>
        <h1 className=' text-4xl '>OOPS !!!</h1>
        <h2 className=''>Something went Wrong</h2>
        <h3 className='font-bold text-red-600'>{err.status + " : " + err.statusText}</h3>
    </div>
  )
}

export default Error