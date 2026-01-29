import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header({ title }) {
  return (
    <header>
      <h1> {title} </h1>
    </header>
  );
}

function Footer({ year }) {
  return <footer>Copyright {year}</footer>;
}

function App() {
  const date = new Date().getFullYear();
  return (
    <div>
      <Header title="React Profile" />
      <p>This is the main component</p>
      <Footer year={date} />
    </div>
  );
}

export default App;
