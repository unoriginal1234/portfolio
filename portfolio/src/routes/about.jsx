import ABOUT_ARRAY from '../content/about'

export default function About() {

  return (
    <>
      <div className="container">
       {ABOUT_ARRAY.map((paragraph, index) => {
          return (<>
            <p key={index}>
              {paragraph}
            </p>
            <br></br>
          </>
            )
       })}
      </div>
    </>
  )
}