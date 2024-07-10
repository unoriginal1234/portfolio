import { Link } from 'react-router-dom';
import PROJECTS_ARRAY from '../content/projects'
import ContactForm from '../content/ContactForm'
import HeadshotCard from '../components/headshotCard'
import ProjectCard from '../components/projectCard'
import LandingPage from '../components/landingPage'
import Skills from '../components/skills'
import Socials from '../components/socials'
import Blurb from '../components/blurb'

export default function Index() {


  return (

    <div>
      <div className="container grid is-col-min-12" >
        <div className="section">
          <LandingPage />
          <HeadshotCard />
        </div>

        <div className="section">

          <Blurb />
          <div className="section">
            <Skills />
          </div>
        </div>
      </div>

      <div className="section" style={{"paddingTop":"0px"}}>
        <h2 className="title has-text-centered">Projects</h2>
      </div>
        <div className="container grid is-col-min-12" >
          {
            PROJECTS_ARRAY.map((project, index) => {
              return (
                <Link className="cell" key={index} to='/projects'>
                  <ProjectCard project={project}/>
                </Link>
              )
            })
          }
        </div>
    </div>

  );
}