import logoVideo from "../assets/logo/Juliana.mp4";
const  FooterPage = () => {
  return (
    <div className="bg-black text-white  text-center flex justify-center items-center flex-col space-y-2">
      
        <video src={logoVideo} autoPlay muted loop className=" mt-14 h-30 w-auto " ></video>
      
      <p>&copy; 2026 Browser Brain. All rights reserved.</p>
      <p>
        <a href="/privacy" className="text-gray-400 hover:text-gray-200">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" className="text-gray-400 hover:text-gray-200">
          Terms of Service
        </a>
      </p>

    </div>
  )
}

export default FooterPage