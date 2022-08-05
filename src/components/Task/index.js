/* eslint-disable jsx-a11y/label-has-associated-control */
// PropTypes
import PropTypes from 'prop-types';
// Style
import './style.scss';

export default function Task({
  label,
  done,
  onChangeTask,
  onDeleteTask,
  id,
}) {
  const classNames = done ? 'task-item task-item--done' : 'task-item ';

  const handleChange = () => {
    onChangeTask(id);
  };

  const handleClick = () => {
    onDeleteTask(id);
  };

  return (
    <li className="task">
      <label className={classNames}>
        <input type="checkbox" name="checkbox" checked={done} onChange={handleChange} />
        {label}
      </label>
      <button type="button" className="task-btn" onClick={handleClick}>X</button>
    </li>
  );
}

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChangeTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
