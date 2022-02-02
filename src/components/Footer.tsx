import React from 'react'


import { useState, useEffect } from 'react'
import icon from '../icon.svg'




export function Footer() {
    var [allIsClicked, setAllIsClicked] = useState(true);

  return (
  
    <div className = "FooterProps">
        <div className="MenuOptions" style={{marginLeft: '40px'}}>  Circular Art</div>
        <div className="FooterFlexBox">
       
        <a href="https://twitter.com/Circular_Art" style={{height:'40px', width:"40px", marginRight:'5px', cursor: 'pointer' }} >
       <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256"  style ={{fill:'white'}}className="rainbowFill"></circle><path  d="M256 0a256 256 0 110 512 256 256 0 010-512zm-45 392c113 0 175-94 175-175v-8c12-9 22-20 31-32-11 5-23 8-36 10 13-8 23-20 27-34-11 7-25 12-39 15a62 62 0 00-105 56c-51-3-96-27-126-65a62 62 0 0019 83c-10-1-20-3-28-8v1c0 30 21 54 49 60a61 61 0 01-27 1c7 25 30 42 57 43a124 124 0 01-91 25c27 18 59 28 94 28z" fill="black"></path>
              </svg>
              </a>
              
              <a href="https://discord.gg/x9WDWApECc" style={{height:'40px', width:"40px", marginRight:'5px', cursor: 'pointer'}}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256" className="rainbowFill"></circle><path d="M372 169s-33-26-72-29l-4 7c36 8 52 21 69 36-29-15-58-29-109-29s-80 14-109 29c17-15 37-29 69-36l-3-7c-42 3-73 29-73 29s-37 54-44 160c38 43 95 43 95 43l12-16c-21-7-43-19-63-42 23 18 59 37 116 37s93-19 117-37c-20 23-43 35-63 42l12 16s57 0 94-43c-6-106-44-160-44-160zM209 300c-14 0-26-13-26-29s12-30 26-30 25 13 25 30-11 29-25 29zm94 0c-14 0-25-13-25-29s11-30 25-30 26 13 26 30-12 29-26 29z" fill="#FFF"></path></svg>
              </a>

               <a href="https://snapshot.org/#/setup" style={{height:'40px', width:"40px", cursor: 'pointer'}}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256" className="rainbowFill"></circle></svg>
              <img style={{top: '-35px',position: 'relative'}}src={icon}></img>
              </a>
              </div>
       
    </div>
   
  )
}

export default Footer
