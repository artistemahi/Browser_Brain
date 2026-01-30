import React from "react";
import {useState,useEffect} from "react";
const Terminal = () => {
    const [text,setText]=useState("");
    const textToShow="hello World";
    const [index,setIndex]=useState(0);

   useEffect(()=>{
          if(index<textToShow.length){
           const timer =  setTimeout(()=>{
                setText(textToShow.slice(0,index+1));
                setIndex(index+1);

            },100);
            return ()=>clearTimeout(timer);
          }
    }, [index]);
  return (
    <div className="bg-black text-green-500 font-mono p-4 mt-8 rounded-lg w-96 h-48">
      <div className="-mt-2 flex ">
        <span className="text-red-500 text-2xl animate-pulse [animation-delay:0ms]">
          &#9679;
        </span>
        <span className="text-yellow-500 text-2xl animate-pulse [animation-delay:200ms]">
          &#9679;
        </span>
        <span className="text-green-500 text-2xl animate-pulse [animation-delay:400ms]">
          &#9679;{" "}
        </span>
        <p className="mt-1.5 ml-4">browser-brain — terminal</p>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Terminal;
