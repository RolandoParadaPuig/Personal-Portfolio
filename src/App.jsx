import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "./components/layout/LayoutComponent";
import { ChartContainer } from "./components/expencesChartComponent/components/chartContainer/ChartContainer";
import { IntroSectionContainer } from "./components/introSectionContainer/IntroSectionContainer";
import { AdviceComponent } from "./components/adviceGeneratorComponent/components/adviceGeneratorComponent/AdviceComponent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/*"} element={<LayoutComponent />}>
            {/* <Route path={"/"} />
            <Route path={"/"} />
            <Route path={"/"} /> */}
          </Route>
          <Route path={"/expences-chart"} element={<ChartContainer />} />
          <Route path={"/intro-section"} element={<IntroSectionContainer />} />
          <Route path={"/advice-generator"} element={<AdviceComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
