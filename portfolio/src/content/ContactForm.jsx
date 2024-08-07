import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import Socials from '../components/socials'

export default function ContactForm () {

  const navigate = useNavigate();

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const key = import.meta.env.VITE_API_KEY
  const service = import.meta.env.VITE_SERVICE
  const form = import.meta.env.VITE_FORM

  const [ isWarning, setIsWarning ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)

  function sendEmail() {

    event.preventDefault()

    if (name.length === 0 || email.length === 0 || !email.includes('@') || message.length < 3) {
      setIsWarning(true)
      return
    }

    setIsLoading(true)
    emailjs.init({publicKey: key});
    return emailjs.send(service, form, {
      'user_name': name,
      'user_email': email,
      'message': message})
      .then((response) => {
        //alert('Thank you for your message ' + name + '!')
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false)
        navigate("/thanks");
      })
      .catch((error) =>{
        console.log('Sorry that came back with an error. ', error)
        setIsLoading(false)
      })
  }

  return (
    <>
    <section className="title">
      Say hello
      <Socials />
    </section>

    <form >

      <div className="field">
      <label className="label">Name:</label>
      <div className="control" style={{"maxWidth" : "360px"}}>
            <input className="input is-rounded" name="name" placeholder="Eric" value={name}
            onChange={(e)=> setName(e.target.value)}/>
            { isWarning && name.length === 0 ? <p className="help is-danger">Name is required</p> : ''}
        </div>
      </div>


    <div className="field">
      <label className="label">Email:</label>
      <div className="control" style={{"maxWidth" : "360px"}}>
            <input className="input is-rounded" name="email" placeholder="eric@email.com" type="email" value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
            { isWarning && (email.length === 0 || !email.includes('@')) ? <p className="help is-danger">Email is required</p> : ''}
        </div>
    </div>



      <div className="field">
      <label className="label">Message:</label>
        <div className="control">
            <textarea className="textarea" name="message" placeholder="I love your website!" value={message}
            onChange={(e)=> setMessage(e.target.value)}/>
            { isWarning && message.length < 3 ? <p className="help is-danger">Include a message longer than 3 characters please!</p> : ''}
        </div>
      </div>

      <div className="field">
        {
          isLoading ? <button className="button is-loading" disabled>Submit</button> : <button className="button" type="submit" onClick={sendEmail}>Submit</button>
        }

      </div>
    </form>
    </>
  )
}