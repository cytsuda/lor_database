import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Screens
import CardScreen from "./screen/CardScreen";
import ProcessDescription from "./screen/ProcessDescription";
import HomeScreen from "./screen/Home/HomeScreen";

function App() {
  return (
    <>
      <Route path="/card" component={ProcessDescription} />
      <Route path="/cards" component={CardScreen} />
      <Route path="/" component={HomeScreen} />
    </>
  );
}

export default App;
