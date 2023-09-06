import React from 'react'
import Hero from "../Assets/pic.jpg";
import {RiArrowRightDoubleFill} from "react-icons/ri";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div
    name="home"
    className='h-screen w-full text-cyan-200 bg-gradient-to-b from-black via-black to-gray-500'>
     
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-stone-400">
          I am A Front-End Developer
          </h2>
          <p className='text-stone-500 py-4 max-w-md'>
            I Have 2 Years Of Experience Building the FrontEnd developing.
            Currently,
            I Love To Work On Web Application Using Technologies Like
            React,Tailwind,Redux,Scss
          </p>

          <div>

          <Link
            to="Portfolio"
            smooth duration={500}
            className='group text-neutral-300 flex items-center font-bold w-fit py-3 px-6 my-2 
             rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>

              Portfolio
              <span className="group-hover:rotate-90 duration-300">
               <RiArrowRightDoubleFill size={30} className="ml-1" />
              </span>
             </Link>
          </div>
        </div>

        <div>
          <img
          src={Hero}
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full "

          />
        </div>
       </div>
    </div>
  );
};

export default Home;
