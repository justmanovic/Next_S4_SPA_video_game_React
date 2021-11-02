import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
const KEY = "ee16de9559db45799581e016de56efca";

function Details() {
  const [gameDetails, setGameDetails] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState(null);

  useEffect(() => {
    console.log("je rentre dans le use effect");
    fetchList();
  }, []);

  const urlTab = window.location.href.split("/");
  const gameName = urlTab[urlTab.length - 2]
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  const gameId = urlTab[urlTab.length - 1];

  const fetchList = async () => {
    let finalURL = `https://api.rawg.io/api/games/${gameId}?key=${KEY}`;
    const res = await fetch(finalURL);
    const data = await res.json();
    setGameDetails(data);
    console.log(finalURL);
    let screenShotURL = `https://api.rawg.io/api/games/${gameId}/screenshots?key=${KEY}`;
    console.log(screenShotURL);

    const resScreenshots = await fetch(screenShotURL);
    const dataScreenshots = await resScreenshots.json();
    setGameScreenshots(dataScreenshots.results);
  };

  return (
    <div className={style.details}>
      <h1>{gameDetails && gameDetails.name}</h1>
      <div className={style.cover}>
        <img src={gameDetails && gameDetails.background_image} />
      </div>
      <p>{gameDetails && gameDetails.description_raw}</p>
      <div className={style.grid}>
        <div>
          <h3>Released:</h3>
          <p>{gameDetails && gameDetails.released}</p>
        </div>
        <div>
          <h3>Ratings:</h3>
          <p>
            {gameDetails && gameDetails.rating} (
            {gameDetails && gameDetails.ratings.length} votes)
          </p>
        </div>
        <div>
          <h3>Platforms:</h3>
          <p>
            {gameDetails &&
              gameDetails.platforms
                .map((platform) => platform.platform.name)
                .join(", ")}
          </p>
        </div>
        <div>
          <h3>Developers:</h3>
          <p>
            {gameDetails &&
              gameDetails.developers
                .map((developer) => developer.name)
                .join(", ")}
          </p>
        </div>
        <div>
          <h3>Publisher:</h3>
          <p>
            {gameDetails &&
              gameDetails.publishers
                .map((publisher) => publisher.name)
                .join(", ")}
          </p>
        </div>
        <div>
          <h3>Genre:</h3>
          <p>
            {gameDetails &&
              gameDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className={style.tag}>
          <h3>Tags:</h3>
          <p>
            {gameDetails && gameDetails.tags.map((tag) => tag.name).join(", ")}
          </p>
        </div>
      </div>
      <h2>Screenshots:</h2>
      <div className={style.screenshots}>
        {gameScreenshots &&
          gameScreenshots.map((screenshot) => <div><img src={screenshot.image} /></div>)}
      </div>
      <h2>Buy:</h2>
      <h2>Trailer:</h2>
    </div>
  );
}

export default Details;
