import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Addpyq() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl">Add a new pyq</h1>
      <form
        className="w-1/2 flex  flex-col justify-center gap-4 items-center"
        method="post"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pyqname">Pyq name</Label>
          <Input
            type="text"
            name="pyqname"
            id="pyqname"
            placeholder="Enter pyq name"
            required
            
          />
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <div>
            <Label htmlFor="pyqyear">Pyq year</Label>
            <Input
              type="text"
              name="pyqyear"
              id="pyqyear"
              placeholder="Enter pyq year"
              required
              className="w-40"
            />
          </div>
          <div>
            <Label htmlFor="subjectid">Subject id</Label>
            <Input
              type="text"
              name="subjectid"
              id="subjectid"
              placeholder="Enter subject id"
              required
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <Button type="submit">Add a pyq</Button>
      </form>
    </div>
  );
}
