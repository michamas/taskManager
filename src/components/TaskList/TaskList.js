import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants.js';
import { Task } from '../Task/Task.js';
import { getStatusFilter, getTasks } from 'redux/selectors.js';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.all:
      return tasks;
    case statusFilter.active:
      return tasks.filter(task => !task.completed);
    case statusFilter.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const StatusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, StatusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
