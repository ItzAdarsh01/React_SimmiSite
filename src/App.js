import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Volunteer from "./components/Volunteer";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Others from "./components/Others";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Volunteer />
      <Menu />
      <Clients />
      <Others />
    </div>
  );
}

export default App;
