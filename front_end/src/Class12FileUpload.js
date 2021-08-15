import React, { useState, useEffect } from "react";
import FileUploader from "react-firebase-file-uploader";
import storage from "./firebase.js";
import Spinner from "./LoadingAnimation";
import Done from "./DoneAnimation";
const Class12FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  function handleUploadStart() {
    setProgress(0);
  }
  function handleUploadSuccess(filename) {
    setFile(filename);
    setProgress(100);
    setDone(true);
    storage
      .ref("Class-12")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        setFileUrl(url);
      });
  }
  function handleProgress(progress) {
    setProgress(progress);
  }
  function AfterSuccess() {
    setTimeout(() => {
      setDone(false);
    }, 2000);
  }
  return (
    <div className="file-uploader">
      <FileUploader
        accept="*"
        name="image"
        storageRef={storage.ref("Class-12")}
        onUploadStart={handleUploadStart}
        onUploadSuccess={handleUploadSuccess}
        onProgress={handleProgress}
      />
      {progress < 100 && file ? <Spinner /> : null}
      {progress == 100 && file && done ? (
        <div>
          <Done />
          {AfterSuccess()}
        </div>
      ) : null}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Class12FileUpload;
