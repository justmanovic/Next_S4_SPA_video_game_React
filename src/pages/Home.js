import React, { useContext } from "react";
import TextIntro from "../components/TextIntro";
import style from "./Home.module.css";
import CardGame from "../components/CardGame";
import PlatformFilter from "../components/PlatformFilter";
import MyContext from "../Context";
const KEY = "ee16de9559db45799581e016de56efca";

function Home() {
  const ctx = useContext(MyContext);
  const loadMore = () => {
    ctx.fetchList(ctx.pageCount + 1, ctx.searchedGame);
    ctx.setPageCount(ctx.pageCount + 1);
  };

  return (
    <>
      <TextIntro />
      <PlatformFilter
        setPlatform={ctx.setPlatform}
        selectedPlatform={ctx.selectedPlatform}
      />
      <div>
        {ctx.searchedGame ? (
          <p>
            Jeu recherché : <b>"{ctx.searchedGame}"</b>
          </p>
        ) : (
          <h1>Les nouveautés</h1>
        )}
      </div>
      <div className={style["results-grid"]}>
        {(ctx.results &&
          ctx.selectedPlatform !== "" &&
          ctx.results
            .filter((result) =>
              result.parent_platforms
                .map((parent_platform) => parent_platform.platform.name)
                .includes(ctx.selectedPlatform)
            )
            .map((result) => {
              return <CardGame key={Math.random().toString()} game={result} />;
            })) ||
          (ctx.selectedPlatform === "" &&
            ctx.results.map((result) => {
              return <CardGame key={Math.random().toString()} game={result} />;
            }))}
      </div>
      {ctx.pageCount < 3 && <button onClick={loadMore}>Load more</button>}
    </>
  );
}

export default Home;
