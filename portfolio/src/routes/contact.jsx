import ContactForm from '../content/ContactForm'

export default function Contact() {
  return (
    <>

    <div className="grid is-col-min-12">
      <div className="cell section is-row-span-2">
          <ContactForm />
      </div>
      <div className="cell section">
        <figure className="image is-2x3">
            <img className="is-rounded" src="images/OnCouch.jpg"/>
        </figure>
      </div>

    </div>


    </>
  )
}