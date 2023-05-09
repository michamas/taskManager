// import { useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar.js';
import { Layout } from './Layout/Layout.js';
import { TaskForm } from './TaskForm/TaskFrom.js';
import { TaskList } from './TaskList/TaskList.js';

const App = () => {
  // const value = useSelector(state => state.tasks[0].text);
  // console.log('🚀 ~ value:', value);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default App;
