import React from 'react';

export default function Portfolio() {
  return (
    <div>
 <h1>Portfolio</h1>

      <div className="image-scroller">
        <div className="image-ticker-fade" aria-hidden="true"></div>
        <div className="image-ticker-container">
        <img className="portfolio-image" src={require(`../../assets/portfolio/backlink-party.png`)}  alt="backlink-party"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/big-five-personality-test.png`)}  alt="Big Five Persoanlity Tests"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/budget-tracker.png`)}  alt="Budget Tracker"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/coinhiz.png`)}  alt="CoinHiz"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/hizzil.png`)}  alt="Hizzil"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/loanmeahome.png`)}  alt="Loan Me A home"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/lordandstanley.png`)}  alt="Lord and Stanley"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/run-buddy.png`)}  alt="Run Buddy"/><br />

        </div>
        <div className="image-ticker-container">
        <img className="portfolio-image" src={require(`../../assets/portfolio/backlink-party.png`)}  alt="backlink-party"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/big-five-personality-test.png`)}  alt="Big Five Personality Tests"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/budget-tracker.png`)}  alt="Budget Tracker"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/coinhiz.png`)}  alt="CoinHiz"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/hizzil.png`)}  alt="Hizzil"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/loanmeahome.png`)}  alt="Loan me A Home"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/lordandstanley.png`)}  alt="Lord and Stanley"/><br />
        <img className="portfolio-image" src={require(`../../assets/portfolio/run-buddy.png`)}  alt="Run Buddy"/><br />

      </div>
      </div>
      
      <h1>
       Check out my protfolio of Websites: </h1>
<div className='portfolioHolder'>
<div className="card">
<p> BackLinkParty.com</p>

       <img className="portfolioImage" src={require(`../../assets/portfolio/backlink-party.png`)}  alt="backlink-party"/><br />
       <a href="https://www.github.com/waters000" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://backlinkparty.com" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>


</div>
<div className="card">
</div>
<div className="card">
<p>Big-Five-Personality-Tests.com</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/big-five-personality-test.png`)}  alt="backlink-party"/><br />
       <a href="https://www.github.com/waters000" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://big-five-personality-test.com" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>
<div className="card">
<p>Budget Tracker</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/budget-tracker.png`)}  alt="backlink-party"/><br />
       <a href="https://github.com/Waters000/budget-trackerPWA" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://pwa-s-budget-tracker.herokuapp.com/" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>
<div className="card">
<p>CoinHiz.com</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/coinhiz.png`)}  alt="backlink-party"/><br />
       <a href="https://github.com/Waters000/coinhiz" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://www.github.com/waters007" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>
<div className="card">
<p>Hizzil.com</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/hizzil.png`)}  alt="backlink-party"/><br />
       <a href="https://github.com/Waters000" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://www.hizzil.com" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>

<div className="card">
<p>Loanmeahome.com</p>

       <img className="portfolioImage" src={require(`../../assets/portfolio/loanmeahome.png`)}  alt="backlink-party"/><br />
       <a href="https://github.com/Waters000/loanMeAHome" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://loanmeahome.herokuapp.com/" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>
<div className="card">
<p> LordandStanley.com</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/lordandstanley.png`)}  alt="backlink-party"/><br />
       <a href="https://www.github.com/waters000" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://www.lordandstanley.com" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>
<div className="card">
<p> Run Buddy</p>
       <img className="portfolioImage" src={require(`../../assets/portfolio/run-buddy.png`)}  alt="backlink-party"/><br />
       <a href="https://github.com/Waters000/run-buddy" target="blank"><button> <img className="portfoliologo" src={require(`../../assets/images/github.jpg`)} alt="Github"></img> GitHub</button></a>
       <a href="https://waters000.github.io/run-buddy/" target="blank"><button className="button1"> <img className="portfoliologo" src={require(`../../assets/images/website.jpg`)} alt="Website"></img> Website</button></a>

</div>


    </div> 

    </div>



      
       
  );
}


