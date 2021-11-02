import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  const search = (e) => {
    e.preventDefault();
    if (e.target.value.length >= 4) {
      props.onSearch();
      props.setSearchedGame(e.target.value);
    }
  };

  const submit = (e) => {
    // e.preventDefault();
    props.setSearchedGame(e.target.value);
    props.onSubmit();
  };

  return (
    <header className={style.header}>
      <Link className={style.logo} to="/">
        The Hyper Progame
      </Link>
      <form onSubmit={submit} action="/">
        <input
          onChange={search}
          type="text"
          className={style["search-bar"]}
          placeholder="Search a game"
        />
      </form>
    </header>
  );
}

export default Header;
