import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "./components/layout/LayoutComponent";
import { ChartContainer } from "./components/expencesChartComponent/components/chartContainer/ChartContainer";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
