import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Document } from 'react-pdf'
const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose");
  const [uploadedFile, setUploadedFile] = useState({});
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadedFile({ 
        fileName: res.data.filename,
        filePath: res.data.filePath 
      });
      console.log(uploadedFile)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was an error with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
    
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            onChange={onChange}
            className="custom-file-input"
            id="customFile"
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="submit"
          
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {uploadedFile ? (
        
        <div>
        <Document file={uploadedFile.filePath}/>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
