import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  const search = (e) => {
    e.preventDefault();
    if (e.target.value.length >= 5) {
      props.onSearch();
      props.setSearchedGame(e.target.value);
    }
  };

  return (
    <header className={style.header}>
      <Link to="/">The Hyper Progame</Link>
      <form>
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
