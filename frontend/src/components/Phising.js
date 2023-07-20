import React, { useEffect, useState } from "react";
import "react-bootstrap";
import "../cssfile/Phising.css";

export default function Phising() {
  const [formvalue, setformvalue] = useState({ name: "" });
  const [result, setResult] = useState(null);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };

  const handleFormsubmit = async (e) => {
    e.preventDefault();
    let API = "http://127.0.0.1:5000/predicturl_api";
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: formvalue.name }),
      });
      const data = await res.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="header">Phishing Website Detection</div>
      <form onSubmit={handleFormsubmit}>
        <div className="form">
          <label className="levelcls">Enter url name</label>
          <input
            type="text"
            name="name"
            value={formvalue.name}
            onChange={handleInput}
            className="inputtext"
          ></input>
          <div className="btn">
            <button>Submit</button>
          </div>
        </div>
      </form>
      {/* {result && (
        <div>
          <h1>{result}</h1>
         
        </div>
      )} */}
      {result && (
        <div>
          <h1>
            {result === 1
              ? "We guess it is a safe website"
              : "Caution! Suspicious website detected"}
          </h1>
        </div>
      )}
    </div>
  );
}
