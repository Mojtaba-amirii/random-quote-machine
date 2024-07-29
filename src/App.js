import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteBox from "./components/QuoteBox";
import "./styles/App.css";

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center min-vh-100">
      <QuoteBox />
    </div>
  );
}

export default App;
