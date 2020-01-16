import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Container from "./components/container";

library.add(fas);

function App() {
  return <Container />;
}

export default App;
