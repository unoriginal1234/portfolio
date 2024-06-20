import { Outlet } from "react-router-dom";
import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

export default function Root() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}