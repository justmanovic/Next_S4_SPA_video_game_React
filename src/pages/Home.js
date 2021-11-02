import React, { useEffect, useState } from "react";
import TextIntro from "../components/TextIntro";
import style from "./Home.module.css";
import CardGame from "../components/CardGame";
const KEY = "ee16de9559db45799581e016de56efca";

function Home(props) {
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const fetchList = async (page, argument) => {
    let finalURL = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=${KEY}&page=${page}&page_size=9`;
    if (argument) {
      finalURL = `https://api.rawg.io/api/games?search=${argument}&search_precise=true&key=${KEY}&page=${page}&page_size=9`;
    }

    const res = await fetch(finalURL);
    const data = await res.json();
    setResults(results.concat(data.results));
  };

  useEffect(() => {
    console.log("use effect");
    fetchList(pageCount, props.searchedGame);
  }, [props.searchedGame]);

  const loadMore = () => {
    fetchList(pageCount + 1);
    setPageCount(pageCount + 1);
  };

  return (
    <>
      <TextIntro />
      <div className={style.home}>Bienvenue sur la HOME !</div>
      <div className={style["results-grid"]}>
        {results &&
          results.map((result) => (
            <CardGame key={Math.random().toString()} game={result} />
          ))}
      </div>
      <button onClick={loadMore}>Load more</button>
    </>
  );
}

export default Home;
