import React from "react";

const Progress = ({ id, present, color }) => {
  return (
    <div
      id={id}
      className="progress-bar"
      style={{
        width: `${present}%`,
        backgroundColor: color,
        height: "20px",
        borderRadius: "5px",
      }}
    >
      <span
        style={{ color: "#fff", textAlign: "center", display: "block" }}
      ></span>
    </div>
  );
};

export default Progress;
