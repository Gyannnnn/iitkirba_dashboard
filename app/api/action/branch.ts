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

export const createbranch = async (formData: FormData) => {
  const branchname = formData.get("branchname");
  const branchcode = formData.get("branchcode");
  console.log(branchname, branchcode);

  const file = formData.get("branchlogo");

  if (file instanceof File) {
    const result = await uploadfile(file);
    console.log(result?.secure_url);
    try {
      await axios.post("https://iitkirba-api.vercel.app/api/branch/create", {
        branchcode,
        branchname,
        displayimage: result?.secure_url,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
