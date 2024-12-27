import { ArrowLeftFromLine } from "lucide-react";
import { SquareMenu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SquareMenu />
      </SheetTrigger>
      <SheetContent className="" side="left">
        <SheetHeader>
          <SheetTitle>IIT KIRBA</SheetTitle>
          <SheetDescription>IIT KIRBA Admin dashboard</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col mt-10 gap-2 justify-center items-center">
          <Link
            className="flex justify-center bg-border w-full rounded-md py-1"
            href="/"
          >
            Analytics
          </Link>
          <Link
            className="flex justify-center bg-border w-full rounded-md py-1"
            href="/"
          >
            Users
          </Link>
          <Link
            className="flex justify-center bg-border w-full rounded-md py-1"
            href="/"
          >
            Branch
          </Link>
          <Link
            className="flex justify-center bg-border w-full rounded-md py-1"
            href="/"
          >
            Materials
          </Link>
          <div className="fixed bottom-6">
            <SheetClose asChild>
              <Link className="flex gap-2 text-primary" href="/">
                <ArrowLeftFromLine /> Signout
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
