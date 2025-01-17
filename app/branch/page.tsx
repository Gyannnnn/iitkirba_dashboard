import React from "react";
import Createbranch from "../components/Createbranch";


export default function page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex items-center justify-center">
      <div className="w-[90vw] min-h-screen bg-secondary dark:bg-zinc-950 mt-14 ">
        <h1 className="text-left sm:text-3xl text-xl pt-10 ">
          Create Update and Delete Branches
        </h1>
        <div className="sm:pt-20 pt-10">
          <Createbranch />
        </div>
      </div>
    </div>
  );
}
