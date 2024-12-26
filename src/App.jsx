import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { useEffect } from "react";
import gsap from 'gsap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import Card from './component/Card';


const App = () => {

  useEffect(() => {

    window.addEventListener("mousemove", function (position) {
     
      
      gsap.to(".cursorBox", {
        x: position.x - 20,
        y: position.y - 30,
      })
        
    })
  }, [])

  useGSAP(() =>{

    gsap.to(".backgroundImg1", {
      x: -400,  // Moves to 90% of the viewport width
      y: 400,  // Moves to 90% of the viewport height
      rotation: -360,  // Rotate 360 degrees
      duration: 100,  // Slow down the animation (adjust as needed)
     ease:'linear',  // Ease for slow movement
      repeat: Infinity,  // Repeat once to return to starting position
      yoyo: true
      
    })

  })

  return (
    <div>
      <div className="cursorBox z-0 fixed rounded-[50%] h-[40px] w-[40px] bg-transparent border-[#378cb1] border-4" ></div>
      <div id="#home" className='h-[90vh] w-[90vw] relative scroll none'>

        <div className="backgroundImgs relative">
          <div className="backgroundImg1  absolute w-[800px] top-[-200px] left-[600px] opacity-15  ">
            <img src="/img/bg1.png"  /> </div> 

            <div className="backgrouondImg2 w-[300px] opacity-25 top-[100px] left-[80px] absolute">
              <img src="/img/bg2.png"  />
            </div>
        </div>


        <div className="navbar relative z-40  w-[400px] mx-auto mt-6 rounded-3xl  ">

        <div className="nav flex justify-around  h-[60px] items-center font-mono text-xl text-[#359aff] ">  
          
        <a href="#home"> <span className='home cursor-pointer'>/</span></a>   
        <a href="#skills"> <span className='skills cursor-pointer'>skills</span></a>   
        <a href="#projects">  <span className='projects cursor-pointer'>Projects</span></a>   

          
          </div> 
        </div>
                                                 

        <div className='flex justify-around pt-12'>
                                                            

          <div className="bio pl-9 pt-16">

            <h1 className='text-2xl text-[#439df8] font-mono pl-7'>
              <h2 className='text-[#78a5d3] text-[150px] font-sans font-extrabold py-8 pb-24 pr-3 cursor-pointer relative z-12'di>Alok.</h2>
              <h1 className='pl-5 relative'>
               <div className="hoverWala absolute z-10 left-[160px] top-[-10px] "><Card text={'really ,i am good at this'}/> </div>
               <div className="hoverWala absolute z-10 left-[10px] top-[35px] "><Card text={'do you have any idea, contact me'}/> </div>
                <h1 className='py-2 relative z-12  cursor-pointer'>Frontend Developer.</h1>
                
                <h1 className='py-2 relative z-12  cursor-pointer'>Pixel-Perfect <span className='hoverPe relative z-50 text-yellow-300'>Craftsman</span>.</h1>
                <h1 className='py-2 relative z-12  cursor-pointer'>Coding <span className='hoverPe text-yellow-300'>ideas</span> into Reality.</h1>
              </h1>

            </h1>
          </div>



          <div className="profile relative z-9 pt-12">

            <div className="background relative h-[400px] rounded-[50%] w-[400px] bg-[#F9BC06] ">
              <div className="imgPic pl-[80px] pt-[10px] ">
                <img className='h-[300px] w-[300px] rounded-[50%] ' src="/img/profileImg.jpg" />

                <div className=" absolute z-50">
                  <a className='twitter' href="https://x.com/Aloksingh7457" target='_blank'>< FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                  <a className='email' href="mailto:aloksingh7457@gmail.com" target='_blank'> < FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                  <a className='github' href="https://github.com/Alok-singh7457" target='_blank'> < FontAwesomeIcon icon={faGitlab} size="2x" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>



      <div id="skills" className='w-[100vw] h-[100vh] pt-3'>

        <div className="backgroundImgs2 relative">

        <div className="backgroundImg1 absolute w-[400px] left-[800px] opacity-15 ">
          <img src="/img/bg2.png"  />
        </div>
        
        <div className="backgroundImg2 absolute w-[500px] opacity-10 rotate-12 ">
          <img src="/img/bg3.png"  />
        </div>

        </div>
       

        <div className="heading0 relative ">

        <div className="hoverWala absolute z-10 left-[260px] top-[-70px] "><Card text={'Trust me, Im an expert in this.'}/> </div>

            <div className='heading hoverPe'>  <span className='text-[#2fcf77]'>print</span><span className=' text-yellow-300'>:</span><span className='text-[#37a2ff]'>skills</span></div>
        </div>

        <div className="skillsPage w-full mt-[100px] ">

          <div className="lineOne my-7 flex w-[60vw] mx-auto   ">
            <div className="box justify-center items-center gap-1 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/nextJs.png"  /> <span>Next:Js</span>
            </div>
            <div className="box justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/react.png"  /> <span>React</span>
            </div>
            <div className="box justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/typeScript.png" /> <span>TypeScript</span>
            </div>
            <div className="box justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/javaScript.png" /> <span>Java Script</span>
            </div>

          </div>

          <div className="lineTwo  my-7 flex w-[50vw] mx-auto ">

            <div className="box2 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/tailwind.png"  /> <span>Tailwind Css</span>
            </div>
            <div className="box2 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/gsap.png"  /> <span>Gsap</span>
            </div>
            <div className="box2 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/git.png" /> <span>Git</span>
            </div>


          </div>

          <div className="lineThree  my-7 flex w-[30vw] mx-auto ">

            <div className="box3 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/bash.png" /> <span>Bash</span>
            </div>
            <div className="box3 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <img className='h-[30px] w-[30px] ' src="/img/chatGpt.png" /> <span>chat Gpt</span>
            </div>


          </div>

          <div className="lineFour">

            <div className="box4 justify-center items-center gap-2 text-white flex text-center font-semibold">
              <span>More</span>
            </div>

          </div>

        </div>

      </div>

      <div className=' h-[100vh] w-[100vw] pt-3' id="projects">
      <div className="heading2 ">
          <span className='text-[#2fcf77]'>print</span><span className='text-yellow-300'>:</span><span className='text-[#37a2ff]'>projects</span>
        </div>
        <div className="exatra text-white text-center pt-60"> i am Working on Projects , shortly i'll upfate this Portfolio</div>

      </div>

    </div>
  )
}

export default App
