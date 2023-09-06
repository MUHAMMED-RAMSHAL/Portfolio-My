import React from 'react';

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-500 via-black to-gray-500 text-white">

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className="pb-8">
            <p className="text-4xl text-teal-400 font-bold inline border-b-4 border-gray-500">
            About
            </p>
       

        <p className="text-xl mt-20 font-semibold">
        "Hello, I'm Muhammed Ramshal, a passionate front-end developer with a keen eye for creating visually appealing and user-friendly web experiences. With 2 years of hands-on experience, I've honed my skills in HTML, CSS,JavaScript,BootStrap,Jquery,React js,Tailwind Css to craft seamless interfaces that seamlessly blend form and function. I thrive on solving design challenges and believe in the power of clean code to bring ideas to life. 
        Constantly staying up-to-date with the latest industry trends and best practices, I'm committed to delivering engaging websites that make a lasting impact. Let's collaborate to turn your digital visions into reality."
        </p>


   <br/>

   <p  className="text-xl font-semibold">
    I'm a mechanical engineer with an insatiable curiosity for technology and creativity.
    While my formal education lies in mechanical engineering, my heart beats for the world of coding, web designing, and web development. 
    I've taken the leap into the web development universe, specializing in React.js and leveraging the power of Tailwind CSS to create stunning, user-friendly interfaces. 
    What sets me apart is my ability to blend the precision of engineering with the artistry of web design. With a deep-rooted passion for problem-solving and a keen eye for detail,
    I thrive in crafting functional and visually captivating websites. Join me on my journey as I bridge the gap between mechanics and digital innovation, one line of code at a time."
    </p>
    </div>
    </div>
  </div>
  );
};

export default About;

