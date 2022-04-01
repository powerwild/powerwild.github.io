import { useState } from 'react';
import pic from './profile-pic.jpg';
import LO from './LifeOverflow.png';
import HB from './HauntedBnb.png';
import DEV from './Develp.png';
import GT from './GameTraderz.png';
import './App.css';

function App() {
  const [ showLinks, setShowLinks ] = useState(false);
  const [ showProjects, setShowProjects ] = useState(false);
  const [ showSkills, setShowSkills ] = useState(false);
  const [ showContactInfo, setShowContactInfo ] = useState(true);

  const handleLinks = (e) => {
    e.stopPropagation();
    setShowContactInfo(false);
    setShowProjects(false);
    setShowSkills(false);
    setShowLinks(true);
  };

  const handleProjects = (e) => {
    e.stopPropagation();
    setShowContactInfo(false);
    setShowSkills(false);
    setShowLinks(false);
    setShowProjects(true);
  };

  const handleSkills = (e) => {
    e.stopPropagation();
    setShowContactInfo(false);
    setShowProjects(false);
    setShowLinks(false);
    setShowSkills(true);
  };

  const handleContact = (e) => {
    e.stopPropagation();
      setShowProjects(false);
      setShowSkills(false);
      setShowLinks(false);
      setShowContactInfo(true);
  };



  return (
    <div className="App">
      <div>
        <img src={pic} alt='My Profile' />
        <div>I've spent the first part of my work life jumping from one menial job to the next.
          Over the years, I've unknowingly been seeking out more different jobs that didn't require an education.
          Honestly I was prepared to continue living my life scrapping by without ever accomplishing anything that I could take pride in.
          Two and a half years ago I met the woman that would become my wife. Since then I have been striving to do and be better.
          I was tired of just surviving and decided to actually start building a life for myself and the family that I was creating.
          I came to the conclusion that I would never be better if I didn't better myself, so I set out to find an actual career that would be a good fit for me.
          I discovered several coding programs, but App Academy offered one of the longest programs and was NOT FREE.
          I'm a realist and understand that my future will take a big investment on my part.
          I am and will continue making that investment to achieve the accomplishment I can take pride in, and to provide a better future for the ones I care about.

          Hi. My name is Casey Spears, and I'm striving for a better tomorrow.</div>
      </div>
      <div>
        <div onClick={handleLinks} value='links'>Links</div>
        <div onClick={handleProjects} value='projects'>Projects</div>
        <div onClick={handleSkills} value='skills'>Skills</div>
        <div onClick={handleContact} value='contact'>Contact Me</div>
      </div>
      {showLinks ? (<div>
        <ul>
          <li><a href='https://www.linkedin.com/in/casey-spears-4a6042180/' target='_blank' rel="noreferrer">My Linkedin</a></li>
          <li><a href='https://github.com/powerwild' target='_blank' rel="noreferrer">My GitHub</a></li>
          <li><a href='https://angel.co/u/casey-spears-1' target='_blank' rel="noreferrer">My AngelList</a></li>
        </ul>
      </div>) : null}
      {showProjects ? (<div>
        <ul>
          <li>
            <img src={GT} alt='My project'/>
            <div>Game Traderz is an online trading application for the temporary exchange of physical copies of games owned by users.</div>
            <a href='https://game-traderz.herokuapp.com' target='_blank' rel="noreferrer">Live site</a>
            <a href='https://github.com/powerwild/game-traderz' target='_blank' rel="noreferrer">Repository</a>
          </li>
          <li>
            <img src={DEV} alt='My project'/>
            <div>Develp is an application for reviewing and rating developers you have interacted with in a professional setting.</div>
            <a href='https://develp7.herokuapp.com' target='_blank' rel="noreferrer">Live site</a>
            <a href='https://github.com/powerwild/deVelp' target='_blank' rel="noreferrer">Repository</a>
          </li>
          <li>
            <img src={HB} alt='My project'/>
            <div>HauntedBnB is a clone of AirBnB with a haunted/decrepit spin for those that like to live life with one foot in the grave.</div>
            <a href='https://haunted-bnb.herokuapp.com' target='_blank' rel="noreferrer">Live site</a>
            <a href='https://github.com/powerwild/HauntedBnB' target='_blank' rel="noreferrer">Repository</a>
          </li>
          <li>
            <img src={LO} alt='My project'/>
            <div>Game Traderz is an online trading application for the temporary exchange of physical copies of games owned by users.</div>
            <a href='https://lifeoverflow.herokuapp.com' target='_blank' rel="noreferrer">Live site</a>
            <a href='https://github.com/DavidPhamThinkful/Life-Overflow' target='_blank' rel="noreferrer">Repository</a>
          </li>
        </ul>
      </div>) : null}
      {showSkills ? (<div>
        <ul>
          <li>Node</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>SQLAlchemy</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>Express</li>
          <li>Flask</li>
          <li>React/Redux</li>
        </ul>
      </div>) : null}
      {showContactInfo ? (<div>
        <div>Email: spearscase@gmail.com</div>
        <div>Phone: 720 939 1719</div>
        <div>Or feel free to message me through Linkedin or AngelList</div>
      </div>) : null}
    </div>
  );
}

export default App;
