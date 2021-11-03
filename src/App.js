import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState, useEffect } from "react";
import MyContext from "./Context";
const KEY = "ee16de9559db45799581e016de56efca";

function App() {
  const [searchedGame, setSearchedGame] = useState("");
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [selectedPlatform, setPlatform] = useState("");

  useEffect(() => {
    setResults([]);
    setPageCount(1);
    console.log("use effect recherche");
    console.log(searchedGame);
    fetchList(pageCount, searchedGame);
  }, [searchedGame]);

  const fetchList = async (page, argument) => {
    let finalURL = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=${KEY}&page=${page}&page_size=9`;
    if (argument) {
      finalURL = `https://api.rawg.io/api/games?search=${argument}&search_precise=true&key=${KEY}&page=${page}&page_size=9`;
    }
    const res = await fetch(finalURL);
    const data = await res.json();
    setResults((prev) => [...prev, ...data.results]);
  };

  return (
    <MyContext.Provider
      value={{
        fetchList: fetchList,
        pageCount: pageCount,
        results: results,
        searchedGame: searchedGame,
        selectedPlatform: selectedPlatform,
        setPageCount: setPageCount,
        setPlatform: setPlatform,
        setResults: setResults,
        setSearchedGame: setSearchedGame,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
