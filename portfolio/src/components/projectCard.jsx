// import { Link } from 'react-router-dom'

export default function HeadshotCard ({project}) {
  return (
    <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-square" >
          <img
            src={project.image}
            alt={`Image for ${project.title}`}
          />
        </figure>
      </div>
      <div className="card-content">
        {/* <div className="media"> */}
          <div className="grid is-col-min-1">
            {
              project.icons.map((icon, index) => {
                return (<figure className="image is-48x48 cell" key={index}>
                          <img
                            src={`https://skillicons.dev/icons?i=${icon}`}
                            alt={`${icon} icon`}
                          />
                        </figure>)
              })
            }

          {/* </div> */}
          {/* <div className="media-content">
            <p className="title is-4">{project.title}</p>
            <p className="subtitle is-6">@erictroth</p>
          </div> */}
        </div>

        <div className="content">
          {project.description}
          <br />

        </div>
      </div>
    </div>
    </>
  )
}

