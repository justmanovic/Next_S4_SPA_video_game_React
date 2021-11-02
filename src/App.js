import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";
const KEY = "ee16de9559db45799581e016de56efca";

function App() {
  const [searchedGame, setSearchedGame] = useState("");
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const searchHandler = () => {
    console.log("searched!");
  };

  const submitHandler = () => {
    // e.preventDefault();
    console.log("form submitted");
  };

  const fetchList = async (page, argument) => {
    let finalURL = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=${KEY}&page=${page}&page_size=9`;
    if (argument) {
      finalURL = `https://api.rawg.io/api/games?search=${argument}&search_precise=true&key=${KEY}&page=${page}&page_size=9`;
    }

    const res = await fetch(finalURL);
    const data = await res.json();
    setResults(data.results);
    console.log(finalURL);
    console.log(data.results);
  };

  return (
    <>
      <Router>
        <Header
          results={results}
          setResults={setResults}
          onSearch={searchHandler}
          searchedGame={searchedGame}
          setSearchedGame={setSearchedGame}
          onSubmit={submitHandler}
          fetchList={fetchList}
        />
        <Switch>
          <Route path="/" exact>
            <Home
              searchedGame={searchedGame}
              results={results}
              fetchList={fetchList}
              pageCount={pageCount}
              setPageCount={setPageCount}
            />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
