import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="navigation">
      <Link to="/" className="navigation-button">
        Vote
      </Link>
      <> </>
      <Link to="/leaderboard" className="navigation-button">
        Leaderboard
      </Link>
    </header>
  );
}
