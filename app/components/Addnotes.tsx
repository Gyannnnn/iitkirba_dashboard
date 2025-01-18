"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createnote } from "../api/action/notes";


export default function Addnotes() {
    const [isloading, setloading] = useState(false);
      
    
      const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setloading(true);
        const formData = new FormData(event.target as HTMLFormElement);
        try {
          await createnote(formData);
          toast.success("Notes added successfully");
          (event.target as HTMLFormElement).reset();
        } catch (error) {
          toast.error("Failed to add Notes" + error);
        } finally {
          setloading(false);
        }
      };

  return (
    <div className="w-full  flex flex-col items-center justify-center pt-8">
      <h1>Add a new note</h1>
      <form
        className="sm:w-1/2 w-full flex flex-col items-center justify-center"
        onSubmit={handlesubmit}
      >
        <div className="sm:w-1/2 w-full">
          <Label htmlFor="notesname">Notes name</Label>
          <Input
            type="text"
            name="notesname"
            id="notesname"
            placeholder="Enter notes name"
            required
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <Label htmlFor="subjectid">Subject id</Label>
          <Input
            type="number"
            name="subjectId"
            id="subjectId"
            placeholder="Enter subject id"
            required
          />
        </div>
        <div className="sm:w-1/2 w-full gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input  name="notes" id="notes" type="file" />
        </div>
        <Button type="submit">{isloading?"Loading ....":"Add a new note"}</Button>
        <ToastContainer/>
      </form>
    </div>
  );
}
