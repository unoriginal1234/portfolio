import { useState } from 'react';

export default function ProjectDetail({project}) {

  const [ isGif, setIsGif ] = useState(false)

  return (
    <div className="grid is-col-min-12" style={{"margin": "3%"}}>

        <div className="cell">
          {isGif ? <figure className="image "><img src={project.gif}/></figure> : <figure className="image is-square"><img  src={project.image}/></figure>}


      </div>

      <div className="cell content box">
        <h1 className="is-size-1">{project.title}</h1>
        <button className="button"
          onClick={()=>setIsGif(!isGif)}>
            {isGif ? 'See Less' : 'See More'}
          </button>
          {project.url && <><br></br><a href={project.url} target="_blank">{project.url}</a></>}
        <br></br>
        <p>{project.description}</p>
        </div>
    </div>
  )
}