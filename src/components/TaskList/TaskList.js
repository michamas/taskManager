import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';
// Import the filter value object
import { statusFilters } from '../../redux/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Get an array of tasks from the Redux state
  const tasks = useSelector(getTasks);
  // Get filter value from Redux state
  const statusFilter = useSelector(getStatusFilter);
  // Calculate the array of tasks that need to be displayed in the interface
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
