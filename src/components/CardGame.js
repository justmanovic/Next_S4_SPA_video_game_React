import React from "react";
import style from "./CardGame.module.css";

function CardGame(props) {
  return (
    <div className={style["card-game"]}>
      <h3>{props.game.name}</h3>
      <div className={style["card-img"]}>
        <img
          src={props.game.background_image}
          alt={`photo of ${props.game.name}`}
        />
      </div>
    </div>
  );
}

export default CardGame;
