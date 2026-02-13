import Header from "../components/Header"
import LandingBody from "../components/LandingBody"

const LandingPage = () => {
  return (
    <div >
        <Header isHomepage={true}></Header>
        <LandingBody></LandingBody>
    </div>
  )
}

export default LandingPage