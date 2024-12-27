import VisitorChart from "@/components/visitorchart";
import React from "react";
import Component from "@/components/visitorsgraph";
import BranchWiseVisitors from "@/components/branchwise";
import { MonthwiseVisitors } from "@/components/monthwisevisitor";
import { TotalVisitor } from "@/components/totalvisitor";


export default function page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950  mt-10  flex justify-center">
      <div className="w-[90vw] min-h-screen bg-secondary dark:bg-zinc-950">
        <h1 className="text-4xl pt-10">Analytics</h1>
        <div className="w-[90vw] min-h-screen  pt-2 flex flex-col gap-2">
          <div className="flex  max-sm:flex-col hover:cursor-pointer justify-between  ">
            <VisitorChart />
            <BranchWiseVisitors />
            <MonthwiseVisitors/>
            <TotalVisitor/>
          </div>
          <Component />
        </div>
      </div>
    </div>
  );
}
