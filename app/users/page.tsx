import { Card } from "@/components/ui/card";
import UserTable from "@/components/usertable";
import React from "react";





export default function Page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className="w-[90vw] max-sm:w-[99vw] min-h-screen bg-secondary dark:bg-zinc-950 mt-14">
        <h1 className="text-4xl pt-5 pb-2 pl-2">Users</h1>
        <Card className="min-h-[50vh] px-2 rounded-md mb-4 max-sm:w-[99vw]">
          <UserTable/>
        </Card>
      </div>
    </div>
  );
}
