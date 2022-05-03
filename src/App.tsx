import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VotePage from "./components/Votepage";
import LeaderboardPage from "./components/LeaderboardPage";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
