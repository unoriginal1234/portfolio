import PROJECTS_ARRAY from '../content/projects.js'
import ProjectDetail from '../components/projectDetail'


export default function Projects() {

  return (
    <div className="container">
      <div>
        {
          PROJECTS_ARRAY.map((project, index) => {
            return (
              <div  key={index} >
                <ProjectDetail project={project} />
              </div>

            )
          })
        }
      </div>
      <br></br>
    </div>
  )
}