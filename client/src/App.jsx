import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Greet from "./pages/Greet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Greet />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
