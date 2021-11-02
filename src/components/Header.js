import React, { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
const KEY = "ee16de9559db45799581e016de56efca";

function Header(props) {
  const [searchedItem, setSearchedItem] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    console.log(searchedItem);
    props.setSearchedGame(searchedItem);
  };

  const searching = (e) => {
    setSearchedItem(e.target.value);
  };

  return (
    <header className={style.header}>
      <Link className={style.logo} to="/">
        The Hyper Progame
      </Link>
      {/* <form onSubmit={submit} action="/"> */}
      <form onSubmit={submit}>
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
