import React from 'react'
import TabButton from './TabButton'

function Contact() {
  return (
    <div className = "basic">
      <div className = "aboutMeDiv">

      <TabButton class = "col-2 " title = 'Portfolio' linkpage={"/Portfolio"} />
      
      <TabButton class = "col-2"title = 'Resume' linkpage= "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Home' linkpage={"/"}/>
      </div>
      <div className = "aboutMeDiv">
          <div className = "col-4"></div>
          <div className = "contactPageElement col-4">
          <h1 className = "titleMargin">Email</h1>
          <p>lsimonen@wisc.edu</p>
          </div>
          <div className = "col-4"></div>
      </div>

      <div className = "aboutMeDiv">
          <div className = "col-4"></div>
          <div className = "contactPageElement col-4">
          <h1 className = "titleMargin">Phone</h1>
          <p>262-646-0833</p>
          <div className = "col-4"></div>
          </div>
      </div>
    </div>
  )
}

export default Contact
