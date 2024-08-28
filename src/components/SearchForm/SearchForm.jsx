import "./SearchForm.css";
import useForm from "../../hooks/useForm";

function SearchForm({ handleSearchSubmit }) {
  const { values, handleChange, setValues } = useForm({
    q: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchSubmit(values.q);
  };

  return (
    <form action="" className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="q" className="modal__label modal__label_type_search">
        <input
          type="text"
          className="search-form__input"
          id="q"
          name="q"
          placeholder="Enter topic"
          value={values.q}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="search-form__submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
