import "./App.css";
import AllRoutes from "./AllRoutes";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAllQuestions } from "./actions/question";
import {fetchAllUsers} from "./actions/users"

function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

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
