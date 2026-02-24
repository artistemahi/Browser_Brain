const  FooterPage = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2026 Your Company. All rights reserved.</p>
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