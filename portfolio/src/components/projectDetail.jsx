import { useState } from 'react';

export default function ProjectDetail({project}) {

  const [ isGif, setIsGif ] = useState(false)

  return (

    <>
      <div className={isGif ? "modal is-active": "modal"}>
        <div className="modal-background" onClick={()=>setIsGif(!isGif)}></div>
        <div className="modal-content">
        <figure className="image"><img src={project.gif}/></figure>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={()=>setIsGif(!isGif)}></button>
      </div>

      <div className="grid is-col-min-12" style={{"margin": "3%"}}>

        <div className="cell">
            <figure className="image is-square"><img style={{"borderRadius":"10px"}} src={project.image}/></figure>
        </div>

        <div className="cell content box">
          <div className="has-text-centered">
            <h1 className="is-size-1">{project.title}</h1>
            <button className="button"
              onClick={()=>setIsGif(!isGif)}>
                {isGif ? 'See Less' : 'See More'}
              </button><br></br>
              {project.url && <><br></br><a className="is-size-4" href={project.url} target="_blank">{project.url}</a></>}
            <br></br>
            <p className="content is-size-4">{project.description}</p>
          </div>
          </div>
      </div>
    </>


  )
}