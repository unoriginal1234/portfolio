import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState } from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

export default function Root() {

  const [darkMode, setDarkMode] = useState(false)

  const darkHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div  data-theme={darkMode? "dark" : "light"}>
      <Navigation darkHandler={darkHandler}/>
      <Outlet/>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}