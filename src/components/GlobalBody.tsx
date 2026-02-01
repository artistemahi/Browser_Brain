import React from 'react'

const GlobalBody = () => {
   
  return (
    <div className="bg-gray-300 min-h-dvh p-10">
        <div className="flex justify-between ">
        <div className="flex flex-col space-y-8 bg-gray-500 ">
            <p>this is left pannel</p>
           <ul> Event Loop</ul>
           <ul> Async Lab</ul>
           <ul> Rendering</ul>
           <ul> Performance</ul>
        </div>
        <div className="bg-fuchsia-50 mx-10">
            this is Main Body
        </div>
        <div className="bg-gray-400">
            this is right pannel
        </div>
        </div>
    </div>
  )
}

export default GlobalBody