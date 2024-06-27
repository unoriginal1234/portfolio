import PROJECTS_ARRAY from '../content/projects.js'
import ProjectCard from '../components/projectCard'

export default function Projects() {
  return (
    <div className="container">
      <div className="grid">
        {
          PROJECTS_ARRAY.map((project, index) => {
            return (
              <>
              <ProjectCard key={index} project={project} />
              </>

            )
          })
        }
      </div>
    </div>
  )
}