
const GlobalBody = () => {
  return (
    <div className="bg-gray-300 min-h-dvh ">
      <div className="flex justify-evenly gap-2 min-h-dvh p-10">
        <div className="flex flex-col space-y-8 bg-gray-500 mx-0 px-10 ">
          <p>this is left pannel</p>
          <ul> Event Loop</ul>
          <ul> Async Lab</ul>
          <ul> Rendering</ul>
          <ul> Performance</ul>
        </div>
        <div className="bg-fuchsia-50 mx-10 px-96">this is Main Body</div>
        <div className="bg-gray-400 px-10">this is right pannel</div>
      </div>
    </div>
  );
};

export default GlobalBody;
