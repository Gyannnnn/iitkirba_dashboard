import BranchCarausal from "@/components/branchcaraosal"
import { Card } from "@/components/ui/card"

export default function Branch() {
  return (
    <div className='min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center'>
        <div className='w-[90vw] bg-secondary dark:bg-zinc-950  min-h-screen mt-14'>
            <h1 className='text-4xl pt-5 pb-2 hover:cursor-pointer pl-2'>Branch & Subjects</h1>
            <Card className="flex items-center justify-center h-[70vh]">
                <BranchCarausal/>
            </Card>
        </div>
    </div>
  )
}
