import { Link } from 'react-router-dom';
import PROJECTS_ARRAY from '../content/projects'
import ContactForm from '../content/ContactForm'
import HeadshotCard from '../components/headshotCard'
import ProjectCard from '../components/projectCard'

export default function Index() {


  return (
    <div className="container">
      <div className="is-flex">
        <div className="container"></div>
        <HeadshotCard />
        <div className="container"></div>
      </div>
      <h2 className="container">Projects</h2>
      <div className="container grid is-col-min-12" >
        {
          PROJECTS_ARRAY.map((project, index) => {
            return (
              <Link className="cell" key={index} to='/projects'>
                <ProjectCard   project={project}/>
              </Link>
            )
          })
        }
      </div>
      <ContactForm />
    </div>

  );
}