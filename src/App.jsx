import React from "react";
import { Header } from "./components/Header/Header";
import { Banner } from './components/Banner/Banner';
import { Values } from "./pages/Values/Values";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Values />
    </div>
  );
};

export default App;
