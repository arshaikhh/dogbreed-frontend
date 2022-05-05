import axios from "axios";
import { useEffect, useState } from "react";
import { DogImage } from "../utils/interfaces";

export default function VotePage(): JSX.Element {
  const [images, setImages] = useState<DogImage[]>([]);

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
        .post("https://localhost:4000/", {
          message: newImages[0],
        })
        .then(function (response) {
          console.log(response);
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
        .post("https://localhost:4000/", {
          message: newImages[1],
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setImages(newImages);
    };

    getTwoImages();
  }, []);

  return (
    <>
      <div>
        <h1>Click on a picture to vote</h1>
      </div>

      <div className="flex-row-container">
        <div>
          <img src={images[0] ? images[0].message : ""} alt="placeholder"></img>
          <p>{images[0] ? images[0].sub_breed : ""}</p>
        </div>

        <p id="or-text">OR</p>

        <div>
          <img src={images[1] ? images[1].message : ""} alt="placeholdr"></img>
          <p>{images[1] ? images[1].sub_breed : ""}</p>
        </div>
      </div>
    </>
  );
}
