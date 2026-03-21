import Header from "../components/Header"
import LandingBody from "../components/LandingBody"




const LandingPage = () => {
  return (
    <div className="flex flex-col">   
      <div className="relative z-50"> 
        <Header isHomepage={true} />
      </div>
      <LandingBody />
    </div>
  )
}

export default LandingPage