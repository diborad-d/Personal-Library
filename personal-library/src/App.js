import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App">
      <Nav />
      <Books />
    </div>
  );
}

export default App;
