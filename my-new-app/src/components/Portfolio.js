import React from 'react'
import TabButton from './TabButton'

function portfolio() {
  return (
    <div className = "basic">
      <div className = "aboutMeDiv">

      <TabButton class = "col-2 " title = 'Home' linkpage={"/"} />
      
      <TabButton class = "col-2"title = 'Resume' linkpage= "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Contact Me' linkpage={"/Contact"}/>
      </div>

      <script src="final-grtown.js" type="module"></script>
      <img src = "./StealingInTheWestt.png"></img>
      <button>hi</button>
    </div>
  )
}

export default portfolio
