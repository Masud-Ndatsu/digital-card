import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Interest from "./components/Interest";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <div className="App">
      <Card>
        <MyInfo />
        <main className="main-content">
          <About />
          <Interest />
        </main>
        <Footer />
      </Card>
    </div>
  );
}

export default App;
