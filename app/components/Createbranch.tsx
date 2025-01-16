"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createbranch } from "../api/action/branch";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react";


export default  function Createbranch() {

  const[isloading,setloading]=useState(false)

  const handlesubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true)
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      await createbranch(formData);
      toast.success("Branch created successfully");
      (event.target as HTMLFormElement).reset()
      
    } catch (error) {
      toast.error("Failed to create branch"+error);
    } finally{
      setloading(false)
    }
    
  }


                                                                          
                                                                          
return (
    <div className="w-full  pt-6 flex flex-col items-center justify-cente ">
      <h1 className="text-2xl">Create a new branch</h1>
    
      <form className="w-1/2 flex flex-col justify-center gap-4 items-center" onSubmit={handlesubmit}  method="post">
        <div className="w-full px-20">
          <Label htmlFor="branchname">Branch name</Label>
          <Input
            type="text"
            name="branchname"
            id="branchname"
            placeholder="Enter branch name"
            required
          />
        </div>
        <div className="w-full px-20">
          <Label htmlFor="branchcode">Branch code</Label>
          <Input
            type="text"
            name="branchcode"
            id="branchcode"
            placeholder="Enter Branch code"
            required
          ></Input>
        </div>
        <div className="w-full px-20 ">
          <Label htmlFor="picture">Picture</Label>
          <Input name="branchlogo"  className="w-1/2" id="branchlogo" type="file" />
        </div>
        <Button type="submit">{isloading?"Loading ...":"Create a branch"}</Button>
      </form>
      <ToastContainer/>
    </div>
  );
}
