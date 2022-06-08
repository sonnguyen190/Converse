import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Widgets/Content";
import Header from "./Widgets/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;