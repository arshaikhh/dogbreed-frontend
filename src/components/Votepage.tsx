import { useEffect, useState } from "react";
import { DogImage } from "../utils/interfaces";

export default function VotePage(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getTwoImages = async () => {
      const newImages: string[] = [];
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          data as DogImage;
          newImages[0] = data.message;
        });

      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          data as DogImage;
          newImages[1] = data.message;
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
          <img src={images[0] ? images[0] : ""} alt="placeholder"></img>
          <p>Breed Name</p>
        </div>

        <p id="or-text">OR</p>

        <div>
          <img src={images[1] ? images[1] : ""} alt="placeholdr"></img>
          <p>Breed Name</p>
        </div>
      </div>
    </>
  );
}
