// Uploader.tsx
import React, { useState } from "react";
import { storageRef } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { storageRef } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
const Uploader = () => {
  const [fileToUpload, setFileToUpload] = useState(null);

  const uploadFile = (event) => {
    event.preventDefault();
    if (!fileToUpload) return;
    const uploadRef = ref(storageRef, `files/${fileToUpload.name}`);
    uploadBytes(uploadRef, fileToUpload).then((snapshot) => {
      console.log("Uploaded file " + fileToUpload.name + " to Cloud Storage!");
    }).catch((error) => {
      console.error("Upload failed: ", error);
    });
  };

  return (
    <div className="m-auto">
      <input
        type="file"
        multiple
        onChange={(event) => setFileToUpload(event.target.files[0])}
      />
      <button className="signup-login-button" onClick={uploadFile}>
        Upload
      </button>
    </div>
  );
};

export default Uploader;
