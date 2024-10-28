import React from "react";
import { Header } from "./components/Header/Header";
import { Banner } from './components/Banner/Banner';
// import { Values } from "./pages/Values/Values";
// import { Mission } from "./pages/Mission/Mission";
import { Team } from "./pages/Team/Team";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Values /> */}
      {/* <Mission /> */}
      <Team />
    </div>
  );
};

export default App;
