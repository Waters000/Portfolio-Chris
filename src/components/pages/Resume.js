import React, { useState, useEffect, useCallback } from 'react'


function Resume() {

  const [thankyou, setThankyou] = useState(' Click the link below to download my resume ')

  useEffect(() => {
    document.title = `Download resume`
  })




  const displayMessage = useCallback(() => {
    setThankyou("You downloaded resume....thank you!")


  }, []);




  return (

    <div className="resume">
      <h1>Resume Page</h1>
      <div className="centerthis">


        <p>
          {thankyou}
        </p>
        <a href="../assets/download/ResumeChrisWaters.pdf"
          download><button type="button" className="resume-btn"
            onClick={displayMessage}>Download</button></a>
        <br />{''}

        <img className="chris-resume" src={require(`../../assets/profile/resume.png`)} alt="Chris Waters Resume" />
        <br />
        {thankyou}
      </div>
      <div className="listofskills">
        <h1>List of Coding Skills</h1>
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Drupal</li>
          <li>Wordpress</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>NodeJS</li>
          <li>Web and Server APIs</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Mondo</li>
          <li>React</li>
          <li>PWAs</li>
          <li>MVC Model</li>
          <li>OOP</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>

  );
}

export default Resume;





