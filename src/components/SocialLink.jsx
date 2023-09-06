import React from 'react'
import { FaGithub,FaLinkedin,FaGoogle } from 'react-icons/fa'
import {BsFillPersonLinesFill} from "react-icons/bs"
const SocialLink =()=>{

  const links=[
    {
      id:1,
      child:(
        <>
         Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href:'http://linkedin.com',
      style:"rounded-tr-md",
     
    },
    {
      id:2,
      child:(
        <>
        GitHub <FaGithub size={30}/>
        </>
      ),
      href:'https://github.com/MUHAMMED-RAMSHAL',
      
    },
     {
      id:3,
      child:(
        <>
        Mail <FaGoogle size={30}/>
        </>
      ),
      href:'Shaluramshal@Gmail.com',
   
    },
    {
      id:4,
      child:(
        <>
         Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'Resume.pdf.pdf',
       style:"rounded-br-md",
      download:true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
     <ul>
     {links.map(({id,child,download,href,style}) => (
      <li 
      key={id}
      className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-gray-500"+
      ""+
      style
      
       }
       >
       <a
        href={href}
        className="flex justify-between item-center w-full text-white  hover:text-pink-600"
        download={download}
        target="_blank"
        rel='noreferrer'

        >
        {child}
       </a>
      </li>
      ))}
     </ul>
   </div>
  );
};

export default SocialLink;
