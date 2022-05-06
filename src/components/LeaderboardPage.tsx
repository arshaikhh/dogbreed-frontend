import axios from "axios";
import { useState, useEffect } from "react";
import { dogInfo } from "../utils/interfaces";
export default function LeaderboardPage(): JSX.Element {
  let frontendURL: string;
  process.env.NODE_ENV === "production"
    ? (frontendURL = "https://dogbreed-academy.netlify.app/")
    : (frontendURL = "http://localhost:3000/");

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://dog-breed-voting.herokuapp.com/"
      : "http://localhost:4000/";

  const [leaderboard, setLeaderboard] = useState<dogInfo[]>([]);
  console.log(leaderboard);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log("getting all entries: ", response.data);
        const receivedtopTenDogInfo = response.data;
        console.log(receivedtopTenDogInfo);
        setLeaderboard(receivedtopTenDogInfo);
      })
      .catch((err) => console.error("error when getting entries", err));
  }, [baseUrl]);

  function getOneTopDogInfo(dogProfile: dogInfo, id: number) {
    return parseInt(dogProfile.sumvote_count) > 0 ? (
      <li className="leaderboard-dog-item" key={id}>
        <div style={{ textAlign: "left" }}> {id + 1}</div>
        <div style={{ textAlign: "center" }} className="sub-breed">
          {dogProfile.sub_breed}{" "}
        </div>
        <div style={{ textAlign: "right" }}>
          {parseInt(dogProfile.sumvote_count) === 1
            ? `${parseInt(dogProfile.sumvote_count)} vote`
            : `${parseInt(dogProfile.sumvote_count)} votes`}
        </div>
      </li>
    ) : null;
  }
  return (
    <>
      <h1>Leaderboard Page</h1>

      <div className="leaderboard-page">
        <ol className="leaderboard-list">
          {leaderboard.map(getOneTopDogInfo)}
        </ol>
        <button
          id="refresh-button"
          onClick={() => (window.location.href = frontendURL + "leaderboard")}
        >
          Refresh
        </button>
      </div>
    </>
  );
}
