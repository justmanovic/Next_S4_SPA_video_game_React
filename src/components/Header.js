import React, { useState, useContext } from "react";
import style from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import MyContext from "../Context";

const KEY = "ee16de9559db45799581e016de56efca";

function Header() {
  const ctx = useContext(MyContext);
  const [searchedItem, setSearchedItem] = useState("");
  let history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    console.log(searchedItem);
    ctx.setSearchedGame(searchedItem);
    history.push("/");
  };

  const searching = (e) => {
    setSearchedItem(e.target.value);
  };

  const resetSearch = () => {
    ctx.setSearchedGame("");
    ctx.setPlatform("");
  };

  return (
    <header className={style.header}>
      <Link className={style.logo} to="/" onClick={resetSearch}>
        The Hyper Progame
      </Link>
      <form onSubmit={submit}>
        {/* <form onSubmit={submit}> */}
        <input
          type="text"
          className={style["search-bar"]}
          placeholder="Search a game"
          onChange={searching}
        />
      </form>
    </header>
  );
}

export default Header;
