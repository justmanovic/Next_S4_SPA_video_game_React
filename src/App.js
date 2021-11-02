import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";

function App() {
  const [searchedGame, setSearchedGame] = useState("");

  const searchHandler = () => {
    console.log("searched!");
  };

  const submitHandler = () => {
    // e.preventDefault();
    console.log("form submitted");
  };

  return (
    <>
      <Router>
        <Header
          onSearch={searchHandler}
          searchedGame={searchedGame}
          setSearchedGame={setSearchedGame}
          onSubmit={submitHandler}
        />
        <Switch>
          <Route path="/" exact>
            <Home searchedGame={searchedGame} />
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
