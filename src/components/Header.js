import React, {useState} from "react";
import Search from "./Search";

function Header({handleFilterListing, handlePeaceClick}) {
  return (
    <header>
      <h1 onClick={handlePeaceClick}>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleFilterListing}/>
    </header>
  );
}

export default Header;
