import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Widgets/Content";
import Header from "./Widgets/Header";
import React, { useState } from "react";
import Footer from "./Widgets/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
