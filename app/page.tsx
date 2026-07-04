import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import MyProjects from "@/components/ui/myProjects"
import Technologies from "@/components/ui/technologies"
import Contact from "@/components/ui/contact"
import Footer from "@/components/ui/footer"
export default function PortfolioPage (){
  return(
    <div className="min-h-screen min-w-screen m-auto bg-white">
        <Navbar/>
        <Hero/>
        <MyProjects/>
        <Technologies/>
        <Contact/>
        <Footer/>
      </div>
  )
}
