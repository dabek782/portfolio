import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import MyProjects from "@/components/ui/myProjects"
export default function PortfolioPage (){
  return(
    <div className="min-h-screen min-w-screen m-auto bg-white">
        <Navbar/>
        <Hero/>
        <MyProjects/>
      </div>
  )
}
