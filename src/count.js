import React, { useState } from "react";
import styles from "./index.css";

const Info = () => {
  const [data, setData] = useState(1);
  const increment = () => {
    setData(data + 1);
  };
  return (
      <div>
        <h1 style={{ textAlign: "center" }}>{data}</h1>
        <button className="main" onClick={increment}>COUNTER</button>
      </div>
      
  );
};
export default Info;