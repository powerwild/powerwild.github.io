import { useState } from 'react';
import pic from './profile-pic.jpg';
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
      <div className='prof-details'>
        <img className='prof-img' src={pic} alt='My Profile' />
        <div>Have you been searching for a Software Engineer that is considerate, understanding, works well with a team or alone,
          puts forth effort and has the skills and knowledge to complete the work you need done?
          Hello. My name is Casey Spears. I'm a Software Engineer who was primarily trained and graduated from App Academy.
          Feel free to peruse my professional links and personal projects(including team projects).
        </div>
      </div>
      <div className='clickables'>
        <div onClick={handleLinks} value='links'>Links</div>
        <div onClick={handleProjects} value='projects'>Projects</div>
        <div onClick={handleSkills} value='skills'>Skills</div>
        <div onClick={handleContact} value='contact'>Contact Me</div>
      </div>
      {showLinks ? (
        <ul className='proff-links'>
          <li><a href='https://www.linkedin.com/in/casey-spears-4a6042180/' target='_blank' rel="noreferrer">My Linkedin</a></li>
          <li><a href='https://github.com/powerwild' target='_blank' rel="noreferrer">My GitHub</a></li>
          <li><a href='https://angel.co/u/casey-spears-1' target='_blank' rel="noreferrer">My AngelList</a></li>
        </ul>
      ) : null}
      {showProjects ? (<div>
        <ul>
          <li className='project'>
            <img className='proj-img' src={GT} alt='My project'/>
            <div className='proj-dets'>Game Traderz is an online trading application for the temporary exchange of physical copies of games owned by users.</div>
            <div className='proj-links'>
              <a href='https://game-traderz.onrender.com' target='_blank' rel="noreferrer">Live site</a>
              <a href='https://github.com/powerwild/game-traderz' target='_blank' rel="noreferrer">Repository</a>
            </div>
          </li>
          <li className='project'>
            <img className='proj-img' src={DEV} alt='My project'/>
            <div className='proj-dets'>Develp is an application for reviewing and rating developers you have interacted with in a professional setting.</div>
            <div className='proj-links'>
              <a href='https://develp.onrender.com' target='_blank' rel="noreferrer">Live site</a>
              <a href='https://github.com/powerwild/deVelp' target='_blank' rel="noreferrer">Repository</a>
            </div>
          </li>
          <li className='project'>
            <img className='proj-img' src={HB} alt='My project'/>
            <div className='proj-dets'>HauntedBnB is a clone of AirBnB with a haunted/decrepit spin for those that like to live life with one foot in the grave.</div>
            <div className='proj-links'>
              <a href='https://haunted-bnb.onrender.com' target='_blank' rel="noreferrer">Live site</a>
              <a href='https://github.com/powerwild/HauntedBnB' target='_blank' rel="noreferrer">Repository</a>
            </div>
          </li>
        </ul>
      </div>) : null}
      {showSkills ? (
        <ul className='skills-list'>
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
      ) : null}
      {showContactInfo ? (<div className='contact-info'>
        <div>Email: spearscase@gmail.com</div>
        <div>Or feel free to message me through Linkedin or AngelList</div>
      </div>) : null}
    </div>
  );
}

export default App;
