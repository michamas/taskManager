import { getError, getIsLoading } from 'redux/selectors.js';
import { AppBar } from './AppBar/AppBar.js';
import { Layout } from './Layout/Layout.js';
import { TaskForm } from './TaskForm/TaskForm.js';
import { TaskList } from './TaskList/TaskList.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError); // Get state parts
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};

export default App;
