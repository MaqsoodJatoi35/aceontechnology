import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Common/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div
        className="flex bg-[#000000]"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <div className="w-[5%] px-1">
          <Sidebar />
        </div>
        <div className="bg-[#282A31] rounded-l-3xl w-[95%] px-10 py-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
