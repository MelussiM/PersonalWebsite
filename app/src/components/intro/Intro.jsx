import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  
  function timeout(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
  }

  useEffect(()=>{

    let isCancelled = false;
    
    const handleChange = async () => {
      await timeout(1000);
      if(!isCancelled){
          init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: ["Developer", "Programmer", "Software Engineer"],
        });
      }

    }
    handleChange();

    return()=>{
        isCancelled = true;
    };
  },[])

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      
        <div className="right">
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Melusi Mkhonta</h1>
              <h3>
                Freelance <span ref={textRef}></span>
              </h3>
          </div>
          <a href="#portfolio">
              <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
