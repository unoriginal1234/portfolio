import PROJECTS_ARRAY from '../content/projects.js'

export default function Projects() {
  return (
    <>
      {
        PROJECTS_ARRAY.map((project, index) => {
          return (
            <div key={index}>
              <h2>
                {project.title}
              </h2>
              <p>
                {project.description}
              </p>
            </div>
          )
        })
      }
    </>
  )
}