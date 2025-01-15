import React from "react";
import Createbranch from "../components/Createbranch";

export default function page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex items-center justify-center">
      <div className="w-[90vw] min-h-screen bg-secondary dark:bg-zinc-950 mt-14 ">
        <h1 className="text-left text-3xl pt-10 ">
          Create Update and Delete Branches
        </h1>
        <div className="pt-20">
          <Createbranch />
        </div>
      </div>
    </div>
  );
}
