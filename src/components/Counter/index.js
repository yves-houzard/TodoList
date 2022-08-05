/* eslint-disable jsx-a11y/label-has-associated-control */
// PropTypes
import PropTypes from 'prop-types';
// Style
import './style.scss';

export default function Counter({ taskNumber, selectedCategory }) {
  let number = 'Aucune tâche en cours';
  if (taskNumber === 1) {
    number = 'Une tâche en cours';
  }
  else if (taskNumber > 1) {
    number = `${taskNumber} tâches en cours`;
  }

  const handleCategoryChange = (e) => {
    selectedCategory(e.target.value);
  };

  return (
    <section className="indicator">
      <div className="counter">{number}</div>
      <div className="filter">
        <select id="filter-tasks" onChange={handleCategoryChange}>
          <option value="">Toutes</option>
          <option value="undone">A faire</option>
          <option value="done">Complétée</option>
        </select>
        <span className="focus" />
      </div>
    </section>
  );
}

Counter.propTypes = {
  taskNumber: PropTypes.number,
  selectedCategory: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  taskNumber: 0,
};
