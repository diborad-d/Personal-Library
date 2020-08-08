import React from "react";

const Jumbotron = prop=> {
  return (
    <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron">
      {prop.children}
    </div>
  );
};

export default Jumbotron;
