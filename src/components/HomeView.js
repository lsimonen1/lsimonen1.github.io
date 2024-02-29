import React from 'react'
import TabButton from "./TabButton";
import {Link} from "react-router-dom";



const HomeView = () => {

  return (
    
    <div className="namePage" style = {{}}>
      <div className="topHalf">
      <TabButton class = "col-2" title = 'Portfolio' href = "/portfolio"/>
      <TabButton class = "col-2"title = 'About Me' />
      <TabButton class = "col-2"title = 'Download Resume' />
      <TabButton class = "col-2"title = 'Contact Me' />
</div>
      <header className="App-header">
      <h1 class = "col-sm-12 col-md-8 col-lg-6 titleName" className = 'titleName'>Lucas Simonen</h1>
      <div className = 'majorName'>
        <p style = {{padding:0, margin:0}}>Computer Science Undergraduate at UW Madison</p>
      </div>
      
      </header>
      </div>
      
  )
  
}


export default HomeView