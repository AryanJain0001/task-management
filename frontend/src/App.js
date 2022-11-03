import React, { useState } from "react";
import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import { Login } from "./Login";
import { Register } from "./Register";
import Sidebar from "./Components/Sidebar";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
 

    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      <Navbar/>
      
      <Sidebar/>
  
    </div>
  );
}

export default App;
