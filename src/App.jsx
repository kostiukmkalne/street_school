import React from "react";
import { Header } from "./components/Header/Header";
import { Banner } from './components/Banner/Banner';
// import { Values } from "./pages/Values/Values";
import { Mission } from "./pages/Mission/Mission";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Values /> */}
      <Mission />
    </div>
  );
};

export default App;
