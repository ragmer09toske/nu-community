"use client";
 
import { UploadButton, UploadDropzone } from "../utils/uploadthing";
 
export default function UploadUI() {
  return (
    <main className="flex flex-col items-center justify-between ">
     <div>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  </main>
  );
}