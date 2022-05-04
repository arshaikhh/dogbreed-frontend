import axios from 'axios';
import { useState, useEffect } from 'react';
import {dogInfo} from '../utils/interfaces'
export default function LeaderboardPage(): JSX.Element {

const [leaderboard, setLeaderboard] = useState<dogInfo[]>([])
console.log(leaderboard)
useEffect(() => {
  axios
    .get("https://dog-breed-voting.herokuapp.com/")
    .then((response) => {
      console.log("getting all entries: ", response.data);
      const receivedtopTenDogInfo = response.data;
      console.log(receivedtopTenDogInfo)
      setLeaderboard(receivedtopTenDogInfo);
    })
    .catch((err) => console.error("error when getting entries", err));
}, []);

function getOneTopDogInfo(dogProfile: dogInfo, id: number) {
 console.log(dogProfile.sumvote_count)
  return <li className ='OneListItem' key= {id}>{dogProfile.breed} {parseInt(dogProfile.sumvote_count) === 1 ? `${parseInt(dogProfile.sumvote_count)} vote`:`${parseInt(dogProfile.sumvote_count)} votes`}</li>
}
  return(

  <>
    <h1>Leaderboard Page</h1>

    <ol className = 'ListOfTen'>
      {leaderboard.map(getOneTopDogInfo)}
    </ol>
  </>
  
  
  )
}
