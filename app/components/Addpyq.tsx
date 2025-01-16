"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createpyq } from "../api/action/pyq";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Addpyq() {
  const [isloading, setloading] = useState(false);
  const [pyq, setPyq] = useState<any>({});

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      await createpyq(formData);
      toast.success("Pyq added successfully");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to add pyq" + error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl">Add a new pyq</h1>
      <form
        className="w-1/2 flex flex-col justify-center gap-4 items-center"
        method="post"
        onSubmit={handlesubmit}
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
              type="number"
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
              type="number"
              name="subjectid"
              id="subjectid"
              placeholder="Enter subject id"
              required
            />
          </div>
        </div>
        <div>
          <Select name="pyqtype" onValueChange={(value) => setPyq(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pyq type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="MID">MID semster</SelectItem>
                <SelectItem value="END">END semester</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pyqpdf">Pyq PDF</Label>
          <Input name="pyqpdf" id="pyqpdf" type="file" accept=".pdf" required />
        </div>
        <Button type="submit">{isloading ? "Loading ..." : "Add a pyq"}</Button>
      </form>
      <ToastContainer />
    </div>
  );
}
