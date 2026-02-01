import Headers from '../components/Header'
import GlobalBody from '../components/GlobalBody'
const GlobalPage = () => {
   
  return (
    <div>

        <Headers isHomepage={true}></Headers>
        <GlobalBody></GlobalBody>
    </div>
  )
}

export default GlobalPage