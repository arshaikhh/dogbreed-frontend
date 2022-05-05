import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="navigation">
      <Link to="/" className="navigationButton">
        Vote
      </Link>
      <> </>
      <Link to="/leaderboard" className="navigationButton">
        Leaderboard
      </Link>
    </header>
  );
}
