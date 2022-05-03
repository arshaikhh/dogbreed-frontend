import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">Vote</Link>
      <> </>
      <Link to="/leaderboard">Leaderboard</Link>
    </header>
  );
}
