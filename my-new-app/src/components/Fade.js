import React, { useEffect, useState } from "react";
import Name from "./Name";
import TabButton from "./TabButton";
function Fade() {

 

  const [colorState, setColorState] = useState();

  let color1 = 2;
  let counter = 1;

  useEffect(() => {
    const timer = setInterval(() => {
        if(color1<255 && color1 > 1){
            color1 = color1 + counter;

        }else{
            counter = counter * -1;
            color1 = color1 + counter;
        }
        setColorState(color1);
        },50)
        return () => clearInterval(timer);
  }, []);

  //<TabButton class = "col-2"title = 'About Me' />
  return <div style={{ margin: "0rem", background: "linear-gradient(to bottom right,rgba(00,"+colorState/1.5+","+colorState/1.5+",1),rgba(150,"+colorState/2+","+colorState/2+",1))"}}>

<div className="namePage" style = {{}}>
      <div className="topHalf">
      <TabButton class = "col-2 " title = 'Portfolio' linkpage={"/Portfolio"} />
      
      <TabButton class = "col-2"title = 'Resume' linkpage= "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Contact Me' linkpage={"/Contact"}/>
</div>
      <header className="App-header">
        <Name />
      </header>
      </div>


  </div>;
}

export default Fade;