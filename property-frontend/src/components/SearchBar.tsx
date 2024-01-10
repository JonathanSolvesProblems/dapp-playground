const SearchBar = () => {
  return (
    <>
      <header>
        <h2 className="header__title">Number of properties by region</h2>
        <input
          type="text"
          className="header__search"
          placeholder="Search by criteria"
        ></input>
      </header>
    </>
  );
};

export default SearchBar;
