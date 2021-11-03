import React, { useEffect, useState } from "react";
import TextIntro from "../components/TextIntro";
import style from "./Home.module.css";
import CardGame from "../components/CardGame";
import PlatformFilter from "../components/PlatformFilter";
const KEY = "ee16de9559db45799581e016de56efca";

function Home(props) {
  const loadMore = () => {
    props.fetchList(props.pageCount + 1, props.searchedGame);
    props.setPageCount(props.pageCount + 1);
  };

  return (
    <>
      <TextIntro />
      <PlatformFilter
        setPlatform={props.setPlatform}
        selectedPlatform={props.selectedPlatform}
      />
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
        {(props.results &&
          props.selectedPlatform !== "" &&
          props.results
            .filter((result) =>
              result.parent_platforms
                .map((parent_platform) => parent_platform.platform.name)
                .includes(props.selectedPlatform)
            )
            .map((result) => {
              return <CardGame key={Math.random().toString()} game={result} />;
            })) ||
          (props.selectedPlatform === "" &&
            props.results.map((result) => {
              return <CardGame key={Math.random().toString()} game={result} />;
            }))}
      </div>
      {props.pageCount < 3 && <button onClick={loadMore}>Load more</button>}
    </>
  );
}

export default Home;
