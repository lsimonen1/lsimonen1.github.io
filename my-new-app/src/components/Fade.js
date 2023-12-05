import React, { useEffect, useState } from "react";
import TabButton from "./TabButton";
import {Card, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router";

function Fade() {

  const navigate1 = useNavigate();

  const [button1color, setbutton1color] = useState('transparent')
  const [button2color, setbutton2color] = useState('transparent')
  const [button3color, setbutton3color] = useState('transparent')

  const [colorState, setColorState] = useState();

  let color1 = 2;
  let counter = 1;

  function goToPortfolio(){
    navigate1("/portfolio")
  }
  function goToResume(){
    window.open('https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=OWHS3Q');
    
    
  }
  function goToAboutMe(){
    navigate1("/Contact")
  }

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


  function makeBackgroundWhite(){
    setbutton1color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruondClear(){
    setbutton1color('transparent');

  }
  function makeBackground2White(){
    setbutton2color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruond2Clear(){
    setbutton2color('transparent');

  }
  function makeBackground3White(){
    setbutton3color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruond3Clear(){
    setbutton3color('transparent');

  }

/*<TabButton class = "col-2 " title = 'Portfolio' linkpage={"/Portfolio"} />
      
      <TabButton class = "col-2"title = 'Resume' linkpage= "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ?e=GOcMmS"/>
      <TabButton class = "col-2"title = 'Contact Me' linkpage={"/Contact"}/>*/


  //<TabButton class = "col-2"title = 'About Me' /> xs={5} md={3} lg={2} xxl={1}
  return <div style={{ margin: "0rem", background: "linear-gradient(to bottom right,rgba(00,"+colorState/1.5+","+colorState/1.5+",1),rgba(150,"+colorState/2+","+colorState/2+",1))"}}>

<div className="namePage" style = {{}}>
      <div className="topHalf">
      
</div>
      <header className="App-header" style = {{padding:0, margin:0}}>
      <h1 class = "titleName" className = 'titleName' style = {{}}>Lucas Simonen</h1>
      <div className = 'majorName' style = {{padding:0, margin:0}}>
      <p style = {{padding:0, margin:0}}>Computer Science Undergraduate at UW Madison</p>

      </div>
      <div style={{padding: "1rem"}}></div>
      <Container style={{width: "30vw"}}>
      <Row  style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Card id = "portfoliobutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button1color }`, 
      display: "flex", margin: "0.5rem", padding: "0.5rem", fontFamily: "Dosis", fontWeight: "bold"}} onMouseEnter={() => makeBackgroundWhite()} onMouseLeave={() => makeBackgruondClear()} onClick={goToPortfolio}>Portfolio</Card>
      <Card id = "resumebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button2color }`, 
      display: "flex", margin: "0rem", padding: "0.5rem", fontFamily: "Dosis", fontWeight: "bold"}} onMouseEnter={() => makeBackground2White()} onMouseLeave={() => makeBackgruond2Clear()} onClick={goToResume}>Resume</Card>
      <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button3color }`, 
      display: "flex", margin: "0.5rem", padding: "0.5rem", fontFamily: "Dosis", fontWeight: "bold"}} onMouseEnter={() => makeBackground3White()} onMouseLeave={() => makeBackgruond3Clear()} onClick={goToAboutMe}>About Me</Card>
      </Row>
      </Container>
      </header>
      </div>


  </div>;
}

export default Fade;