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
    const stream = cloudinary.uploader.upload_stream({
        folder: "kirba",
        tags: "kirba",
    },
        (error, result) => {
      if (error) return reject(error.message);

      return resolve(result);
    });

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const createnote = async (formData: FormData) => {
    const notesname = formData.get("notesname");
    const subjectId = formData.get("subjectId");
    const parsedid = parseInt(subjectId as string, 10);
    const file = formData.get("notes");
  
    if (file instanceof File) {
      try {
        const result = await uploadfile(file);
        console.log(result);
  
        if (result && result.secure_url) {
          await axios.post("https://iitkirba-api.vercel.app/api/notes/create", {
            notesname: notesname as string,
            subjectId: parsedid,
            link: result.secure_url,
          });
        } else {
          console.error("File upload failed: No result returned");
        }
      } catch (error) {
        console.error("Error posting PYQ:", error);
      }
    } else {
      console.error("Invalid file: No file uploaded");
    }
  };
  
