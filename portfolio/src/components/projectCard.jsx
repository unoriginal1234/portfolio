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
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{project.title}</p>
            <p className="subtitle is-6">@erictroth</p>
          </div>
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

