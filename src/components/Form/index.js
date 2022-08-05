// Props
import PropTypes from 'prop-types';
// Style
import './style.scss';

export default function Form({ inputValue, onChangeInputValue, onFormSubmit }) {
  const handleChange = (e) => {
    onChangeInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue && inputValue.length > 2) {
      onFormSubmit();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
