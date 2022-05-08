import React, {useState, useEffect, useCallback} from 'react'
import { render } from "https://cdn.skypack.dev/react-dom@17";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";


function Resume() {

  const [thankyou, setThankyou] = useState(' Click the link below to download my resume ')

  useEffect(() => {
    document.title = `Download resume`
  })




  const displayMessage = useCallback(() => {
    setThankyou("You downloaded resume....thank you!")
    
    confetti({
      particleCount: 150,
      spread: 60
    });
  }, []);




    return (
      
      <div  className = "resume">
        <h1>Resume Page</h1>
        <div className = "centerthis">
      
       
        <p>
         {thankyou}
        </p>
        <a href="../assets/download/ResumeChrisWaters.pdf" 
        download><button type="button" className="resume-btn" 
        onClick={displayMessage}>Download</button></a>
        <br />{''}
        </div>
        <div>
        <img className="chris-resume" src={require(`../../assets/profile/resume.png`)} alt="Chris Waters Resume"/>
        <br />
          {thankyou}
          </div>
        </div>
      
    );
  }

  export default Resume;





  