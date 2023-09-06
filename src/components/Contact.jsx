import React from 'react'

const Contact = () => {
  return (
    <div name="contact"
    className='w-full  h-full mx-auto bg-gradient-to-b from-gray-500 via-black to-gray-500  text-white p-4'>
    <div className="flex flex-col justify-center max-w-screen-lg mx-auto  h-full">
      <div className="pb-8">
        <p className="text-4xl font-semibold inline border-b-4 border-gray-500  text-teal-400 ">Contact
        </p>
        <p className="py-6 font-semibold">Submit The Form Below To Get In Touch With Me
        </p>
      </div>
      <div className="flex justify-center items-center">
      <form 
      action="https://getform.io/f/8044869a-1110-4515-b397-d65d17714190"
      method="POST"
      className="flex flex-col w-full md:w-1/2">

      <input 
      type="text"
      name="name"
      placeholder="Enter Your Name"
      className="p-2 bg-transparent border-2 rounded-md  text-white font-semibold focus:outline-none"  
      />

      <input
         
        type="text"
        name="Email"
        placeholder="Enter Your Email "
        className='my-4 p-2  bg-transparent border-2 rounded-md  text-white font-semibold focus:outline-none'
      />
       <textarea
       name="message"
       placeholder='Enter Your Message'
       rows="10"
       className="p-2 bg-transparent border-2 rounded-md  text-white font-semibold focus:outline-none">

       </textarea>
       
       
        <button className="text-white font-semibold bg-gradient-to-b from-green-500 to-green-900 px-6 py-3 my-8 mx-auto flex 
        items-center rounded-md hover:scale-110 duration-300">
        Let's Talk
        </button>
      </form>
      </div>
    </div>
</div>
    
  );
};

export default Contact;
