import "./SearchForm.css";

function SearchForm() {
  return (
    <form action="" className="search-form">
      <input
        type="text"
        className="search-form__input"
        id="keyword"
        placeholder="Enter topic"
      />
      <button type="submit" className="search-form__submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
