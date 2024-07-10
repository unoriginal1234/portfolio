import { Link } from 'react-router-dom';
import PROJECTS_ARRAY from '../content/projects'
import ProjectCard from '../components/projectCard'
import LandingPage from '../components/landingPage'
import Skills from '../components/skills'
import Blurb from '../components/blurb'

export default function Index() {


  return (

    <div>
      <div className="container grid is-col-min-12" >
        <div className="section">
          <LandingPage />
        </div>

        <div className="section">
          <div className="box">
            <Blurb />
            <div className="section">
              <Skills />
            </div>
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