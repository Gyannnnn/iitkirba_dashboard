import React from "react";
import Addpyq from "../components/Addpyq";
import Addnotes from "../components/Addnotes";

export default function page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className="w-[90vw] min-h-screen  mt-14">
        <h1 className="text-3xl pt-10">Add Pyqs & Notes</h1>
        <div className="sm:pt-4 pt-10">
          <Addpyq />
        </div>
        <div>
          <Addnotes/>
        </div>
      </div>
    </div>
  );
}
