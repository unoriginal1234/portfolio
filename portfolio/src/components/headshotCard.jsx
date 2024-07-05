import headshot from '../content/headshot.jpg';
import ABOUT_ARRAY from '../content/about';
import { Link } from 'react-router-dom'

export default function ProjectCard () {
  return (
    <>
      <div className="card" >
        <div className="card-image">
          <figure className="image" >
            <img
              src={headshot}
              alt="Image of a handsome Software Engineer"
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
              <p className="title is-4">Eric T. Roth</p>
              <p className="subtitle is-6">@erictroth</p>
            </div>
          </div>

          <div className="content">
            {ABOUT_ARRAY[0]} <Link to="about">Read More...</Link>
            <br />

          </div>
        </div>
      </div>
    </>
  )
}

