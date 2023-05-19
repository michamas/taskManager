import { AppBar } from 'components/AppBar/AppBar.js';
import { TaskForm } from 'components/TaskForm/TaskForm.js';
import { TaskList } from 'components/TaskList/TaskList.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations.js';
import { selectIsLoading } from 'redux/selectors.js';

export const TasksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);

  return (
    <div>
      TasksPage
      <AppBar />
      <TaskForm />
      {isLoading && 'LOADING...'}
      <TaskList />
    </div>
  );
};
