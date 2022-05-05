import axios from "axios";
import { useEffect, useState } from "react";
import { DogImage } from "../utils/interfaces";
import { Dog } from "../utils/interfaces";

export default function VotePage(): JSX.Element {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://pastebin-abdulsaj.herokuapp.com/"
      : "http://localhost:4000/";

  let frontendURL: string;
  process.env.NODE_ENV === "production"
    ? (frontendURL = "https://dogbreed-academy.netlify.app/")
    : (frontendURL = "http://localhost:3000/");

  const [images, setImages] = useState<DogImage[]>([]);
  const [firstDog, setFirstDog] = useState<Dog>();
  const [secondDog, setSecondDog] = useState<Dog>();

  useEffect(() => {
    const getTwoImages = async () => {
      const newImages: DogImage[] = [];
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          data as DogImage;
          console.log(data);
          newImages[0] = { message: data.message };
        });
      //our fetch is working and we are getting a response

      await axios
        .post(baseUrl, {
          message: newImages[0],
        })
        .then(function (response) {
          console.log(response.data);
          setFirstDog(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          data as DogImage;
          newImages[1] = { message: data.message };
        });

      await axios
        .post(baseUrl, {
          message: newImages[1],
        })
        .then(function (response) {
          console.log(response.data);
          setSecondDog(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setImages(newImages);
    };

    getTwoImages();
  }, [baseUrl]);

  async function updateVote(id: number) {
    await axios.put(baseUrl + id);
    window.location.href = frontendURL;
  }
  return (
    <>
      <div>
        <h1>Click on a picture to vote</h1>
      </div>

      <div className="flex-row-container">
        <div>
          <img
            src={images[0] ? images[0].message : ""}
            alt="placeholder"
            onClick={() => (firstDog ? updateVote(firstDog.id) : 0)}
          ></img>
          <p>{firstDog ? firstDog.sub_breed : ""}</p>
        </div>

        <p id="or-text">OR</p>

        <div>
          <img
            src={images[1] ? images[1].message : ""}
            alt="placeholder"
            onClick={() => (secondDog ? updateVote(secondDog.id) : 0)}
          ></img>
          <p>{secondDog ? secondDog.sub_breed : ""}</p>
        </div>
      </div>
    </>
  );
}
