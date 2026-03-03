import { useState } from "react";
import {SaveIcon,ClearIcon,DownloadIcon} from "../../utils/constants";

const NotesEditor = () => {
  const [Notes, setNotes] = useState(() => {
    return localStorage.getItem("Note_key") || "";
  });
  const handlerSave = () => {
    localStorage.setItem("Note_key", Notes);
  };
  const handlerClear = () => {
    localStorage.removeItem("Note_key");
    setNotes("");
  };
  const handlerDownload = () => {
    // download logic
    const blob = new Blob([Notes], { type: "text/plain" }); // creating blob= binary large object ,raw data file
    const url = URL.createObjectURL(blob); // then creating a fake url of that file
    const a = document.createElement("a"); // creating fake anchor tag <a></a>
    a.href = url; // seting fake url attaching file to tag , now anchor tag pointing to memory location
    a.download = "My-Notes.pdf"; // triggering download on click()
    a.click(); // this simulating user clicking the link
    URL.revokeObjectURL(url); // removing the temporary url
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4 mt-4 mx-4">
      <h2 className="text-xl font-semibold mb-2">📝 Notes Maker</h2>

      <textarea
        value={Notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-40 p-3 border rounded-lg resize-none"
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={handlerSave}
          className="bg-green-700 text-white px-4 py-2 rounded click:bg-green-500 font-bold"
        > <SaveIcon/>
          Save
        </button>
        <button
          onClick={handlerClear}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-500 font-bold"
        > <ClearIcon/>
        Clear
        </button>

        <button
          onClick={handlerDownload}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-500 font-bold"
        > <DownloadIcon/>
        Download
        </button>
      </div>
    </div>
  );
};
export default NotesEditor;
