import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer"
import Navigation from "../components/navigation"

export default function Root() {
  return (
    <div >
      <Navigation />
      <Outlet/>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}