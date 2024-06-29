export default function ContactForm () {
  return (
    <form >
      <div className="field is-grouped">
        <div className="control">
            <label className="label">Name:</label>
            <input className="input is-rounded" name="name" placeholder="Eric"/>
        </div>
        <div className="control">
            <label className="label">Email:</label>
            <input className="input is-rounded" name="email" placeholder="eric@email.com" type="email"/>
        </div>
      </div>
      <div className="field">
        <div className="control">
            <label className="label">Message:</label>
            <textarea className="textarea" name="message" placeholder="I want to hire you..." />
        </div>
      </div>
      <div className="field">
        <button className="button" type="submit">Submit</button>
      </div>
    </form>
  )
}