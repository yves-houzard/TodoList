// == Import
import './styles.scss';

// Data
import tasksData from 'src/data/tasks';

// Module
import { useState } from 'react';
// Componants
import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Header from '../Header';

// == Composant
export default function Todolist() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(tasksData);
  const [selectedCategory, setSelectedCategory] = useState();
  const undoneTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);
  const orderedTasks = [...undoneTasks, ...doneTasks];

  const addTask = () => {
    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);
    const task = {
      id: maxId + 1,
      label: newTask,
      done: false,
    };
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setNewTask('');
  };

  const setTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const removeTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(removeTasks);
  };

  const getFilteredList = () => {
    if (selectedCategory === 'done') {
      return doneTasks;
    }
    if (selectedCategory === 'undone') {
      return undoneTasks;
    }
    return orderedTasks;
  };

  const filteredList = getFilteredList();

  return (
    <>
      <Header />
      <main className="todolist">
        <Form
          inputValue={newTask}
          onChangeInputValue={setNewTask}
          onFormSubmit={addTask}
        />
        <Counter
          taskNumber={undoneTasks.length}
          selectedCategory={setSelectedCategory}

        />
        <Tasks
          tasks={filteredList}
          onTaskDone={setTask}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
}
