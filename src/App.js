import React from "react";
import Login from "./componet/Login";
import Desktop from "./componet/Desktop";
import Demo from "./componet/Demo";
import Home from "./componet/Home";
import './App.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App(){
  return(             
   <Router>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/desktop" element={<Desktop/>}/>
      <Route exact path="/demo" element={<Demo/>}/>
      <Route exact path="/home"element={<Home/>}/>
   </Routes>
   </Router>
  );
}
export default App;

   