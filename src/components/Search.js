import React, {useState} from "react";

function Search({onSearch}) {
  const [searchbar, setSearchBar] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(searchbar);
    setSearchBar("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchbar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
