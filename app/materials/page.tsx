import React from "react";
import Addpyq from "../components/Addpyq";
import Addnotes from "../components/Addnotes";
import { auth } from "@/auth";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  if(!session) return (
    <div className="h-screen w-screen bg-secondary dark:bg-zinc-900 flex items-center justify-center">
      <div>
        <h1>Private content </h1>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  )
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
