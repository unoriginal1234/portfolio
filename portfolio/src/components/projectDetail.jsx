import { useState } from 'react';

export default function ProjectDetail({project}) {

  const [ isGif, setIsGif ] = useState(false)

  return (
    <div className="grid">
      <div>
        {isGif ? <img src={project.gif}/> : <img src={project.image}/>}
      </div>

      <div className="is-flex-direction-column" >
        <div className="container is-flex is-justify-content-space-between">
        <h1 className="is-size-1">{project.title}</h1>
        <button className="button"
          onClick={()=>setIsGif(!isGif)}>
            {isGif ? 'See Less' : 'See More'}
          </button>
        </div>
      <a href={project.url} target="_blank">{project.url}</a>
      <br></br>

        <p>{project.description}</p>

      </div>
    </div>
  )
}