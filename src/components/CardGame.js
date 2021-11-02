import React from "react";
import style from "./CardGame.module.css";
import { Link } from "react-router-dom";

function CardGame(props) {
  return (
    <Link
      to={`/details/${props.game.name
        .toLowerCase()
        .replace(
          /["~!@#$%^&*\(\)_+=`{}\[\]\|\\:;'<>,.\/?"\- \t\r\n]+/g,
          "-"
        )}/${props.game.id}`}
    >
      <div className={style["card-game"]}>
        <h3>{props.game.name}</h3>
        <div className={style["card-img"]}>
          <img
            src={props.game.background_image}
            alt={`photo of ${props.game.name}`}
          />
        </div>
      </div>
    </Link>
  );
}

export default CardGame;
