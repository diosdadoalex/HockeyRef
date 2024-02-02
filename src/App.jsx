import TeamGridView from "./components/TeamGridView";
import TeamView from "./components/TeamView";
import TopBar from "./components/TopBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<TeamGridView />} />
      </Routes>
    </Router>
  );
}

export default App;
