import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex place-content-center items-center m-12'>

            <div className='mx-12'>
              <h1 className='font-bold text-4xl my-8'>Have a Question ?<br/> Contact Us!</h1>
              <input className='border-b-2 my-4 p-2 border-black' placeholder='Your Name' type="text"/> <br/>
              <input className='border-b-2 my-4 p-2 border-black' placeholder='Your Email' type="email"/> <br/>
              <textarea className='border-b-2 border-black' placeholder='Your Message' rows={5} cols={25} /> <br/>
              <button onClick={()=>{alert("Message sent. Our Subordinates will get in touch with you soon !!")}} className='bg-[#ba1222] px-4 py-2 text-white m-8 rounded-lg'>Send Message</button>
            </div>


            <div>
              <img className='h-72 md:hidden sm:hidden lg:hidden' alt="contact" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHo9OIWFSxAiylc3Km3drPlkcEXDGwQtBLA&usqp=CAU"/>
            </div>
        </div>
    
    </div>
  )
}

export default Contact