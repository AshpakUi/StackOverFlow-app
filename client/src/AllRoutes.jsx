import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
function AllRoutes() {
  
  return (
    <div className="Allroutes-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion/>} />
        <Route path="/Questions/:id" element={<DisplayQuestion/>} />
        <Route path="/Tags" element={<Tags/>} />
        <Route path="/Users" element={<Users/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
