"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const uploadfile = async (
  file: File
): Promise<UploadApiResponse | undefined> => {
  if (file.size <= 0) {
    return;
  }
  const arraybuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arraybuffer);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) return reject(error.message);

      return resolve(result);
    });

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const createpyq = async (formData: FormData) => {
    const pyqname = formData.get("pyqname");
    const pyqyear = formData.get("pyqyear");
    const subjectid = formData.get("subjectid");
    const parsedid = parseInt(subjectid as string, 10);
    const pyqtype = formData.get("pyqtype");
    
    console.log(pyqname, pyqyear);
  
    const file = formData.get("pyqpdf");
  
    if (file instanceof File) {
      const result = await uploadfile(file);
      console.log(result);
  
      
      if (pyqname && pyqyear && !isNaN(parsedid) && result?.secure_url) {
        try {
          await axios.post("https://iitkirba-api.vercel.app/api/pyq/create", {
            pyqname: pyqname as string,
            pyqyear: pyqyear as string,
            subjectId: parsedid, 
            links: result.secure_url, 
            pyqtype,
          });
        } catch (error) {
          console.error("Error posting PYQ:", error);
        }
      } else {
        console.error("Invalid data: Missing required fields");
      }
    } else {
      console.error("Invalid file: No file uploaded");
    }
  };
  
