// PropType
import PropTypes from 'prop-types';
// Style
import './style.scss';
// Componants
import Task from '../Task';

export default function Tasks({ tasks, onTaskDone, deleteTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChangeTask={onTaskDone}
          onDeleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
