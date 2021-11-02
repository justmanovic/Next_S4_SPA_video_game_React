import React, { useEffect, useState } from "react";
import TextIntro from "../components/TextIntro";
import style from "./Home.module.css";
import CardGame from "../components/CardGame";
const KEY = "ee16de9559db45799581e016de56efca";

function Home(props) {
  const loadMore = () => {
    props.fetchList(props.pageCount + 1, props.searchedGame);
    props.setPageCount(props.pageCount + 1);
  };

  return (
    <>
      <TextIntro />
      <div>
        {props.searchedGame ? (
          <p>
            Jeu recherché : <b>"{props.searchedGame}"</b>
          </p>
        ) : (
          <h1>Les nouveautés</h1>
        )}
      </div>
      <div className={style["results-grid"]}>
        {props.results &&
          props.results.map((result) => (
            <CardGame key={Math.random().toString()} game={result} />
          ))}
      </div>
      {props.pageCount < 3 && <button onClick={loadMore}>Load more</button>}
    </>
  );
}

export default Home;
