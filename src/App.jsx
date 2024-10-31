import React from "react";
import { Header } from "./components/Header/Header";
import { Banner } from './components/Banner/Banner';
// import { Values } from "./pages/Values/Values";
// import { Mission } from "./pages/Mission/Mission";
// import { Team } from "./pages/Team/Team";
// import { Feedback } from './pages/Feedback/Feedback';
// import { Quote } from './pages/Quote/Quote';
import { Education } from "./pages/Education/Education";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Values />
      <Mission />
      <Team />
      <Feedback />
      <Quote /> */}
      <Education />
    </div>
  );
};

export default App;
