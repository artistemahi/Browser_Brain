import FooterPage from '../pages/FooterPage';
const GlobalBody = () => {
  return (
    <div className="bg-gray-300 min-h-dvh ">
      {/* heading section */}
        <h1 className="bg-amber-300 py-4 text-2xl font-bold text-gray-900 text-center">some moving text</h1>
      {/* body section */}
      <div className="bg-green-400 flex justify-evenly min-h-dvh ">
        {/* left pannel */}
        <div className="flex flex-col space-y-8 text-white border-green-400 border bg-gray-950 p-4 w-48 ">
          <p>this is left pannel</p>
          <ul> Event Loop</ul>
          <ul> Async Lab</ul>
          <ul> Rendering</ul>
          <ul> Performance</ul>
        </div>
        {/* main body */}
        <div className="flex-1 bg-fuchsia-50 px-10">this is Main Body</div>
        {/* right pannel */}
        <div className="bg-gray-950  border-green-400 border p-4 text-white  ">this is right pannel
           <ul> Run</ul>
          <ul> Async Lab</ul>
          <ul> Rendering</ul>
        </div>
      </div>
    
    <div><FooterPage/></div>
    </div>
  );
};

export default GlobalBody;
