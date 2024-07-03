import { Link } from 'react-router-dom';
import PROJECTS_ARRAY from '../content/projects'
import ContactForm from '../content/ContactForm'
import HeadshotCard from '../components/headshotCard'
import ProjectCard from '../components/projectCard'

export default function Index() {


  return (

    <div >
      <div className="container grid is-col-min-12">
        <HeadshotCard />
        <section className="container is-max-desktop">
        <section className="section">

            <p className="title">Say hey!</p>

        </section>

        <ContactForm />
        </section>
      </div>

      <section className="container">
        <h2 className="title">Projects</h2>
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
      </section>



    </div>

  );
}