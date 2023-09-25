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
            console.log(color1);

        }else{
            counter = counter * -1;
            color1 = color1 + counter;
            console.log(colorState);
        }
        setColorState(color1);
        },50)
        return () => clearInterval(timer);
  }, []);

  return <div style={{ fontSize: "1.2rem", margin: "0rem", backgroundColor: "rgba(200,"+colorState+","+colorState/4+",0.6)"}}>

<div className="namePage" style = {{}}>
      <div className="topHalf">
      <TabButton class = "col-2" title = 'Portfolio' />
      <TabButton class = "col-2"title = 'About Me' />
      <TabButton class = "col-2"title = 'Resume' onClick = "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Contact Me' />
</div>
      <header className="App-header">
        <Name />
      </header>
      </div>


  </div>;
}

export default Fade;