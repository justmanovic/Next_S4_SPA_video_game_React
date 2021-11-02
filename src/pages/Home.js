import React, { useEffect, useState } from "react";
import TextIntro from "../components/TextIntro";
import style from "./Home.module.css";
import CardGame from "../components/CardGame";
const KEY = "ee16de9559db45799581e016de56efca";

function Home(props) {
  // const [results, setResults] = useState([]);

  // const fetchList = async (page, argument) => {
  //   let finalURL = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=${KEY}&page=${page}&page_size=9`;
  //   if (argument) {
  //     finalURL = `https://api.rawg.io/api/games?search=${argument}&search_precise=true&key=${KEY}&page=${page}&page_size=9`;
  //   }

  //   const res = await fetch(finalURL);
  //   const data = await res.json();
  //   setResults([...results, ...data.results]);

  //   console.log(finalURL);
  // };

  // useEffect(() => {
  //   console.log("use effect démarrage");
  //   props.fetchList(props.pageCount);
  // }, []);



  const loadMore = () => {
    // fetchList(pageCount + 1, props.searchedGame);
    props.setPageCount(props.pageCount + 1);
  };

  return (
    <>
      <TextIntro />
      {/* <h1>{props.searchedGame}</h1> */}
      <div className={style["results-grid"]}>
        {props.results &&
          props.results.map((result) => (
            <CardGame key={Math.random().toString()} game={result} />
          ))}
      </div>
      <button onClick={loadMore}>Load more</button>
    </>
  );
}

export default Home;
