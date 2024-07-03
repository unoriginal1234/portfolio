import ABOUT_ARRAY from '../content/about'

export default function About() {

  return (
    <>
      <div className="container box">
       {ABOUT_ARRAY.map((paragraph, index) => {
        if (index > 0) {
          return (<div className="content" key={index}>
            <p >
              {paragraph}
            </p>
          </div>
            )
        }
       })}
      </div>
    </>
  )
}