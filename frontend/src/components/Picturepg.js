import React, { useEffect, useState } from "react";
import "../cssfile/Picture.css";
export default function Picturepg() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/image_predict_api", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="header">Image Forgery Detection</div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="upload">Upload jpg file</label>
          <input
            type="file"
            className="file"
            id="exampleFormControlFile1"
            onChange={handleFileChange}
          />
          <button type="submit">Upload</button>
        </div>
      </form>
      {response && (
        <div>
          <h1>Image is {response.Class}</h1>
          <h1>Confidence level is {response.Confidence}</h1>
        </div>
      )}
    </div>
  );
}