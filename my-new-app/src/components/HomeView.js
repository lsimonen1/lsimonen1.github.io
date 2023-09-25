import React from 'react'
import Name from "./Name";
import TabButton from "./TabButton";




const HomeView = () => {

  return (
    
    <div className="namePage" style = {{}}>
      <div className="topHalf">
      <TabButton class = "col-2" title = 'Portfolio' />
      <TabButton class = "col-2"title = 'About Me' />
      <TabButton class = "col-2"title = 'Download Resume' />
      <TabButton class = "col-2"title = 'Contact Me' />
</div>
      <header className="App-header">
        <Name />
      </header>
      </div>
      
  )
  
}


export default HomeView