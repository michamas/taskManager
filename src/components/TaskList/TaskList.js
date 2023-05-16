import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisibleTasks } from '../../redux/selectors';
import css from './TaskList.module.css';
// Import the filter value object

export const TaskList = () => {
  // // Get an array of tasks from the Redux state
  // const tasks = useSelector(selectTasks);
  // // Get filter value from Redux state
  // const statusFilter = useSelector(selectStatusFilter);
  // Calculate the array of tasks that need to be displayed in the interface

  const visibleTasks = useSelector(selectVisibleTasks);

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
