import { ModeToggle } from "@/components/toggler";
import Link from "next/link";
import { SheetDemo } from "@/components/sidebartrigger";
import Profile from "@/components/Avatar";

export default function Navbar() {
  return (
    <div className="h-14 w-screen bg-secondary/30 dark:bg-black/50  backdrop-blur-lg backdrop-saturate-150 shadow-md flex justify-between px-5 sm:justify-between items-center sm:px-20 fixed top-1 z-10 rounded-lg border border-white/10">
      <div className="flex gap-10">
        <div className="sm:hidden">
          <SheetDemo />
        </div>
        <h1 className="text-lg font-bold text-black dark:text-white sm:block hidden">
          IIT KIRBA
        </h1>
        <div className="hidden gap-4 text-sm text-black dark:text-white items-center sm:flex">
          <Link
            className="dark:text-gray-300 hover:underline underline-offset-2"
            href="/"
          >
            Analytics
          </Link>
          <Link
            className="dark:text-gray-300 hover:underline underline-offset-2"
            href="/users"
          >
            Users
          </Link>
          <Link
            className="dark:text-gray-300 hover:underline underline-offset-2"
            href="/"
          >
            Branch
          </Link>
          <Link
            className="dark:text-gray-300 hover:underline underline-offset-2"
            href="/"
          >
            Materials
          </Link>
        </div>
      </div>
      <div className="flex gap-4 text-black dark:text-white items-center">
        <ModeToggle />
        <Profile />
      </div>
    </div>
  );
}
