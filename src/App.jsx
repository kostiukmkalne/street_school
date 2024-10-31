import React from "react";
import { Header } from "./components/Header/Header";
import { Banner } from './components/Banner/Banner';
// import { Values } from "./pages/Values/Values";
// import { Mission } from "./pages/Mission/Mission";
// import { Team } from "./pages/Team/Team";
// import { Feedback } from './pages/Feedback/Feedback';
// import { Phrase } from "./pages/Phrase/Phrase";
// import { Education } from "./pages/Education/Education";
import { Progress } from "./pages/Progress/Progress";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Values />
      <Mission />
      <Team />
      <Feedback />
      <Phrase />
      <Education /> */}
      <Progress />
    </div>
  );
};

export default App;
