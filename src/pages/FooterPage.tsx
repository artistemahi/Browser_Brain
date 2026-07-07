import logoVideo from "../assets/logo/Juliana.mp4";
const FooterPage = () => {
  return (
    <div className="bg-black text-white text-center flex justify-center items-center flex-col space-y-4 py-10">
      <video
        src={logoVideo}
        autoPlay
        muted
        loop
        className="h-24 w-auto rounded-full shadow-[0_0_30px_rgba(229,9,20,0.35)]"
      />
      <p className="text-sm text-slate-400">
        &copy; 2026 Browser Brain. All rights reserved.
      </p>
      <p className="text-xs text-slate-500">
        <a href="/privacy" className="hover:text-white transition">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="/terms" className="hover:text-white transition">
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default FooterPage;
