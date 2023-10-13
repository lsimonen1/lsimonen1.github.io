import React from 'react'
import TabButton from './TabButton'
import img from './StealingInTheWestt.png'
import logo1 from './project1.gif'
import logo2 from './project2.gif'


function portfolio() {
  return (
    <div>
      <div className = "backgroundslate" color ='red'>
    
      <TabButton class = "col-2 " title = 'Home' linkpage={"/"} />
      
      <TabButton class = "col-2"title = 'Resume' linkpage= "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Contact Me' linkpage={"/Contact"}/>
      </div>
    <div className = "basic">
    <div>
    
     <div className='PPageElement'>
      <p color= "white">Movie poster I designed for COM-ARTS 155</p>
      <img height= "300rem" src = {img}></img>
      </div>

      <div className='PPageElement'>
        <p>Small graphics town project I made for CS 559.</p>
        <img width= "250rem" src = {logo1}></img>

      </div>
      </div>
      <div>
      <div className='PPageElement'>
        <p>Two 2D Helicopters flying I made for CS 559.</p>
        <img width= "250rem" src = {logo2}></img>

      </div>
      <div className='pPageElement'>
        <p>More to come soon! Website is still under construction</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default portfolio
