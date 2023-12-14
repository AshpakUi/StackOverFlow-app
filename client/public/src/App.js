import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
