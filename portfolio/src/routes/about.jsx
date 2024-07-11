import ABOUT_ARRAY from '../content/about'
import AboutAnimation from '../content/aboutAnimation'

export default function About() {

  return (
    <>
    <div className="grid is-col-min-12">
        <AboutAnimation />
      <div className="container section">
        <div className="box">
        {ABOUT_ARRAY.map((paragraph, index) => {
          if (index > 0) {
            return (<div className="content" key={index}>
              <p className="is-size-6">
                {paragraph}
              </p>
            </div>
              )
          }
        })}

        </div>
      </div>

    </div>
    </>
  )
}