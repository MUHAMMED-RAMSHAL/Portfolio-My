import React from 'react'
import  html from "../Assets/html.png";
import  css from "../Assets/css.png";
import  javascript from "../Assets/javascript.png";
import  tailwind from "../Assets/tailwind.png";
import  react from "../Assets/react.png";
import  github from "../Assets/github.png";

const Experience = () => {
  const techs = [
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500",
    },
     {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-blue-500",
    },
     {
      id:3,
      src:javascript,
      title:"javaScript",
      style:"shadow-blue-500",
    },
    {
      id:4,
      src:tailwind,
      title:"Tailwind",
     
      style:"shadow-yellow-500",
    },
    {
      id:5,
      src:react,
      title:"React",
      style:"shadow-blue-600",
    },
  
  {
    id:6,
    src:github,
    title:"GitHub",
    style:"shadow-gray-400",
  },
 
];
  
  
  return (
    <div name="experience" 
    className='bg-gradient-to-b from-gray-500 via-black to-gray-500 w-full h-screen  text-white'
    >

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
      <p className="text-4xl text-teal-400  font-semibold inline border-b-4  border-gray-500">
      Experience
      </p>
      <p className="py-6 font-semibold" > These Are The Technologies I've Worked With</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-9 text-center py-8 px-12 sm:px-0 font-semibold">
      {techs.map(({ id, src, title,style }) => (
        <div 
        key={id}
        className={"shadow-md hover:scale-105  hover:text-blue-400 duration-500 py-2 rounded-lg"}
        >
        <img src={src} alt="" className="w-20 mx-auto"/>
        <p className="mt-4">{title}</p>
      </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Experience;
