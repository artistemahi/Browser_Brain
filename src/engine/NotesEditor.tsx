import { TextField } from "@mui/material";

const NotesEditor = () => {
  return (
    <div>
      <h1 className="text-xl font-bold ">Notes Editor</h1>
      <div className="bg-black rounded-md max-h-dvh max-w-dvw">
        <TextField
          placeholder="Notes..."
          className="bg-white rounded-md border-b-black w-2.50 h-96"
        />
      </div>
      <div className="flex justify-evenly mt-2">
        <button className="bg-green-500 rounded-2xl font-bold text-white px-2 hover:bg-green-600 hover:cursor-pointer">
          Save
        </button>
        <button className="bg-red-600 rounded-2xl text-white font-bold px-2 hover:bg-red-700 hover:cursor-pointer">
          Clear
        </button>
      </div>
    </div>
  );
};
export default NotesEditor;
