import React from 'react';
import arrayDestruct from "../Assets/Portfolio/arrayDestruct.jpg";
import installNode from "../Assets/Portfolio/installNode.jpg";
import navbar from "../Assets/Portfolio/navbar.jpg";
import reactParallax from "../Assets/Portfolio/reactParallax.jpg";
import reactSmooth from "../Assets/Portfolio/reactSmooth.jpg";
import reactWeather from "../Assets/Portfolio/reactWeather.jpg";
const Portfolio = () => {
  const portfolios = [
    {
    id:1,
    src: arrayDestruct,
    },

    {
    id:2,
    src:reactParallax ,
    },

    {
    id:3,
    src: navbar,
    },

    {
    id:4,
    src:installNode,
    },

    {
    id:5,
    src:reactSmooth,
    },

    {
    id:6,
    src:reactWeather,
    },
  ];

  return (
    <div
    name="portfolio" 
    className="bg-gradient-to-b from-gray-500 via-black to-gray-500 w-full text-white">

  <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
    <div className="pb-8">

      <p className="text-4xl  text-teal-400  font-semibold inline border-b-4  border-gray-500">
      Portfolio
      </p>
      <p className="py-6 font-semibold">Check Out Some Of My Work Right Here</p>
   </div>

    <div className="grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
       {portfolios.map(({ id, src }) => (
       <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
       <img
        src={src}
        alt="" 
        className='rounded-md duration-200 hover:scale-105'
        />
        <div className="flex items-center justify-center">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  hover:text-blue-400 font-semibold" >
        Demo
        </button>
        <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  hover:text-green-400 font-semibold">
        Code
        </button>
       </div>
      </div>
     ))}
     </div>
  </div>
 </div>
 );
};

export default Portfolio;
