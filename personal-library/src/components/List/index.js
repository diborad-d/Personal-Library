import React from "react";
import "./style.css";

// exporting List and ListItem comps

export function List({ children }) {
  return (
    <div className="list-overflow-contianer">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
